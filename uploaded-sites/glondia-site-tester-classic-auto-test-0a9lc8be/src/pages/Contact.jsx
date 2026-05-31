import React from 'react';
import { Link } from 'react-router-dom';
import { PageShell, CTAStrip } from '../components/Shared';

const Contact = () => {
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
    e.target.reset();
  };
  return (
    <PageShell active="contact" title="Contact — Classic Auto Services Ltd">
      <section className="page-head">
        <h1>Get In Touch</h1>
        <p>Book a service, request a quote, or just ask us a question — we'll get back to you the same day.</p>
        <div className="crumbs">
          <Link to="/">Home</Link> <i className="fa-solid fa-chevron-right"></i> <span>Contact</span>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h3>Contact Info</h3>
              <p>Reach out through any of these channels. Our team is on-hand Monday to Friday during workshop hours.</p>

              <div className="row">
                <div className="ic"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <strong>Workshop</strong>
                  <span>Korobosea Drive, Gagoma Street,<br/>Port Moresby, N.C.D<br/>(Opposite Koro Boro International School)</span>
                </div>
              </div>

              <div className="row">
                <div className="ic"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <strong>Phone &amp; WhatsApp</strong>
                  <span>+675 7616 5166</span>
                </div>
              </div>

              <div className="row">
                <div className="ic"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <strong>Email</strong>
                  <span>classicautoservicesltd@gmail.com</span>
                </div>
              </div>

              <div className="row">
                <div className="ic"><i className="fa-solid fa-clock"></i></div>
                <div>
                  <strong>Workshop Hours</strong>
                  <span>Monday – Friday<br/>08:00 AM – 05:00 PM</span>
                </div>
              </div>

              <div className="socials">
                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
              </div>
            </div>

            <form className="contact-form reveal delay-2" onSubmit={onSubmit}>
              <h3>Send Us A Message</h3>
              <p>Tell us about your vehicle and what you need — we'll come back with a quote.</p>

              {sent && (
                <div style={{
                  background: "#e8f5e9", color: "#1b5e20",
                  border: "1px solid #a5d6a7", borderRadius: 10,
                  padding: "12px 16px", marginBottom: 20,
                  display: "flex", alignItems: "center", gap: 10
                }}>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Thanks! We've received your message and will be in touch shortly.</span>
                </div>
              )}

              <div className="form-row">
                <div className="field">
                  <label>Your Name</label>
                  <input type="text" required placeholder="Full name" />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input type="tel" required placeholder="+675 ..." />
                </div>
              </div>

              <div className="field">
                <label>Email</label>
                <input type="email" required placeholder="you@example.com" />
              </div>

              <div className="form-row">
                <div className="field">
                  <label>Vehicle</label>
                  <input type="text" placeholder="e.g. Toyota Hilux 2018" />
                </div>
                <div className="field">
                  <label>Service Needed</label>
                  <select defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Engine, Battery &amp; Lights</option>
                    <option>Brake &amp; Tire</option>
                    <option>Steering, Suspension &amp; Transmission</option>
                    <option>Airconditioning</option>
                    <option>Panel Repair / Spray</option>
                    <option>Electrical</option>
                    <option>Vehicle Inspection</option>
                    <option>Diagnostic Scanning</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Message</label>
                <textarea required placeholder="Describe the issue or service you're after..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{width: "100%", justifyContent: "center"}}>
                <i className="fa-solid fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>

          <div className="map reveal">
            <iframe
              title="Classic Auto Services Ltd location"
              src="https://www.google.com/maps?q=Korobosea+Drive,+Port+Moresby,+Papua+New+Guinea&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
};

export default Contact;
