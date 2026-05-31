const express = require('express');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// PostgreSQL Connection Pool
if (!process.env.DATABASE_URL) {
  console.error('CRITICAL ERROR: DATABASE_URL environment variable is not defined.');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Configure Storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Database Initialization
async function initializeDatabase() {
  if (!process.env.DATABASE_URL) return;

  const schema = `
    CREATE TABLE IF NOT EXISTS webstore_submissions (
      id SERIAL PRIMARY KEY,
      full_name TEXT,
      business_name TEXT,
      email TEXT,
      phone TEXT,
      industry TEXT,
      contact_method TEXT,
      product_types TEXT,
      product_count TEXT,
      usp TEXT,
      target_audience TEXT,
      logo_status TEXT,
      brand_colors TEXT,
      tone_style TEXT,
      inspiration_sites TEXT,
      brand_files TEXT,
      inventory_tracking TEXT,
      product_variations TEXT,
      digital_downloads TEXT,
      csv_import TEXT,
      payment_gateways TEXT,
      currencies TEXT,
      tax_requirements TEXT,
      guest_checkout TEXT,
      shipping_methods TEXT,
      international_shipping TEXT,
      local_pickup TEXT,
      fulfillment_process TEXT,
      newsletter_integration TEXT,
      coupon_codes TEXT,
      product_reviews TEXT,
      social_links TEXT,
      domain_status TEXT,
      hosting_pref TEXT,
      legal_policies TEXT,
      compliance_reqs TEXT,
      launch_date TEXT,
      budget_range TEXT,
      maintenance_needs TEXT,
      vision_desc TEXT,
      submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ALTER TABLE webstore_submissions ADD COLUMN IF NOT EXISTS product_samples TEXT;
    ALTER TABLE webstore_submissions ADD COLUMN IF NOT EXISTS legal_docs TEXT;
  `;
  try {
    const client = await pool.connect();
    await client.query(schema);
    client.release();
    console.log('PostgreSQL database schema is ready.');
  } catch (err) {
    console.error('DATABASE INITIALIZATION ERROR:', err.message);
  }
}

initializeDatabase();

// POST Route for Form Submission
app.post('/submit', upload.fields([
  { name: 'brand_files[]' },
  { name: 'product_samples[]' },
  { name: 'legal_docs[]' }
]), async (req, res) => {
  const body = req.body;
  const files = req.files;

  console.log('--- Incoming Submission ---');
  console.log('Body:', JSON.stringify(body, null, 2));

  const getFilePaths = (fieldName) => {
    return (files && files[fieldName]) ? JSON.stringify(files[fieldName].map(f => 'uploads/' + f.filename)) : '[]';
  };

  const safeJson = (val) => JSON.stringify(val || []);
  const safeText = (val) => val || '';

  const sql = `
    INSERT INTO webstore_submissions (
      full_name, business_name, email, phone, industry, contact_method,
      product_types, product_count, usp, target_audience,
      logo_status, brand_colors, tone_style, inspiration_sites, brand_files,
      product_samples, inventory_tracking, product_variations, digital_downloads, csv_import,
      payment_gateways, currencies, tax_requirements, guest_checkout,
      shipping_methods, international_shipping, local_pickup, fulfillment_process,
      newsletter_integration, coupon_codes, product_reviews, social_links,
      domain_status, hosting_pref, legal_policies, legal_docs, compliance_reqs,
      launch_date, budget_range, maintenance_needs,
      vision_desc
    ) VALUES (
      $1, $2, $3, $4, $5, $6,
      $7, $8, $9, $10,
      $11, $12, $13, $14, $15,
      $16, $17, $18, $19, $20,
      $21, $22, $23, $24,
      $25, $26, $27, $28,
      $29, $30, $31, $32,
      $33, $34, $35, $36, $37,
      $38, $39, $40,
      $41
    )
  `;

  const params = [
    safeText(body.full_name), safeText(body.business_name), safeText(body.email), safeText(body.phone), safeText(body.industry), safeText(body.contact_method),
    safeJson(body.product_types), safeText(body.product_count), safeText(body.usp), safeText(body.target_audience),
    safeText(body.logo_status), safeText(body.brand_colors), safeText(body.tone_style), safeText(body.inspiration_sites), getFilePaths('brand_files[]'),
    getFilePaths('product_samples[]'), safeText(body.inventory_tracking), safeText(body.product_variations), safeText(body.digital_downloads), safeText(body.csv_import),
    safeJson(body.payment_gateways), safeText(body.currencies), safeText(body.tax_requirements), safeText(body.guest_checkout),
    safeJson(body.shipping_methods), safeText(body.international_shipping), safeText(body.local_pickup), safeText(body.fulfillment_process),
    safeText(body.newsletter_integration), safeText(body.coupon_codes), safeText(body.product_reviews), safeText(body.social_links),
    safeText(body.domain_status), safeText(body.hosting_pref), safeJson(body.legal_policies), getFilePaths('legal_docs[]'), safeText(body.compliance_reqs),
    safeText(body.launch_date), safeText(body.budget_range), safeText(body.maintenance_needs),
    safeText(body.vision_desc)
  ];

  try {
    await pool.query(sql, params);
    console.log('Submission successfully saved to PostgreSQL');
    res.json({ message: 'Webstore questionnaire submitted successfully!' });
  } catch (err) {
    console.error('SUBMISSION ERROR:', err.message);
    res.status(500).json({ error: 'Failed to save submission: ' + err.message });
  }
});

// GET Route to Retrieve All Submissions
app.get('/submissions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM webstore_submissions ORDER BY id DESC');
    const cleanRows = result.rows.map(row => {
        const newRow = { ...row };
        const jsonFields = ['product_types', 'payment_gateways', 'shipping_methods', 'legal_policies', 'brand_files', 'product_samples', 'legal_docs'];
        jsonFields.forEach(f => {
            try { newRow[f] = JSON.parse(newRow[f] || '[]'); } catch(e) { newRow[f] = []; }
        });
        return newRow;
    });
    res.json(cleanRows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
