import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Logo = () => (
  <Link to="/" className="logo">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f6bff"/>
          <stop offset="100%" stopColor="#0a1a4d"/>
        </linearGradient>
      </defs>
      <path d="M8 40 A 24 24 0 0 1 56 40" fill="none" stroke="url(#lg)" strokeWidth="5" strokeLinecap="round"/>
      {[0,1,2,3,4,5,6].map(i => {
        const a = Math.PI + (i / 6) * Math.PI;
        const r1 = 22, r2 = 17;
        const x1 = 32 + Math.cos(a) * r1, y1 = 40 + Math.sin(a) * r1;
        const x2 = 32 + Math.cos(a) * r2, y2 = 40 + Math.sin(a) * r2;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0a1a4d" strokeWidth="2" strokeLinecap="round"/>
      })}
      <line x1="32" y1="40" x2="48" y2="22" stroke="#e63946" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="32" cy="40" r="3.5" fill="#0a1a4d"/>
    </svg>
    <span className="logo-text">
      <span className="l1">Classic</span>
      <span className="l2">Auto Services Ltd</span>
    </span>
  </Link>
);

export const Topbar = () => (
  <div className="topbar">
    <div className="container">
      <div className="tb-left">
        <span><i className="fa-solid fa-phone"></i>+675 7616 5166</span>
        <span><i className="fa-solid fa-envelope"></i>classicautoservicesltd@gmail.com</span>
        <span className="hide-md"><i className="fa-solid fa-clock"></i>Mon–Fri · 08:00 AM – 05:00 PM</span>
      </div>
      <div className="tb-right">
        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
      </div>
    </div>
  </div>
);

export const Header = ({ active }) => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Home", to: "/", id: "home" },
    { label: "Services", to: "/services", id: "services" },
    { label: "About", to: "/about", id: "about" },
    { label: "Contact", to: "/contact", id: "contact" },
  ];
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav">
        <Logo />
        <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map(({label, to, id}) => (
            <li key={id}>
              <Link to={to} className={active === id ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>
            </li>
          ))}
          <li><Link to="/contact" className="nav-cta" onClick={() => setOpen(false)}><i className="fa-solid fa-calendar-check"></i> Book Now</Link></li>
        </ul>
      </div>
    </header>
  );
};

export const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div className="col brand-foot">
        <Logo />
        <p>Trusted automotive repairs and servicing in Port Moresby. From routine maintenance to diagnostics and panel work — we keep you on the road.</p>
        <div className="socials">
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
        </div>
      </div>
      <div className="col">
        <h5>Quick Links</h5>
        <ul>
          <li><Link to="/"><i className="fa-solid fa-chevron-right"></i> Home</Link></li>
          <li><Link to="/services"><i className="fa-solid fa-chevron-right"></i> Services</Link></li>
          <li><Link to="/about"><i className="fa-solid fa-chevron-right"></i> About Us</Link></li>
          <li><Link to="/contact"><i className="fa-solid fa-chevron-right"></i> Contact</Link></li>
          <li><Link to="/services#specials"><i className="fa-solid fa-chevron-right"></i> Monthly Specials</Link></li>
        </ul>
      </div>
      <div className="col">
        <h5>Services</h5>
        <ul>
          <li><Link to="/services"><i className="fa-solid fa-chevron-right"></i> Engine Services</Link></li>
          <li><Link to="/services"><i className="fa-solid fa-chevron-right"></i> Brake &amp; Suspension</Link></li>
          <li><Link to="/services"><i className="fa-solid fa-chevron-right"></i> Airconditioning</Link></li>
          <li><Link to="/services"><i className="fa-solid fa-chevron-right"></i> Spray Painting</Link></li>
          <li><Link to="/services"><i className="fa-solid fa-chevron-right"></i> Diagnostic Scanning</Link></li>
        </ul>
      </div>
      <div className="col">
        <h5>Get In Touch</h5>
        <p><i className="fa-solid fa-location-dot" style={{color: "var(--blue-400)", marginRight: 8}}></i> Korobosea Drive, Gagoma Street,<br/>Port Moresby, N.C.D<br/><span style={{fontSize: 13, color: "#6271a7"}}>(Opposite Koro Boro International School)</span></p>
        <p style={{marginTop: 10}}><i className="fa-solid fa-phone" style={{color: "var(--blue-400)", marginRight: 8}}></i> +675 7616 5166</p>
        <p><i className="fa-solid fa-envelope" style={{color: "var(--blue-400)", marginRight: 8}}></i> classicautoservicesltd@gmail.com</p>
      </div>
    </div>
    <div className="copyright">
      © {new Date().getFullYear()} Classic Auto Services Ltd. All Rights Reserved.
    </div>
  </footer>
);

export const useReveal = () => {
  const location = useLocation();
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);
};

export const SEO = ({ title, canonical }) => {
  React.useEffect(() => {
    if (title) document.title = title;
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical || window.location.href);
  }, [title, canonical]);
  return null;
};

export const PageShell = ({ active, children, title, canonical }) => {
  useReveal();
  return (
    <React.Fragment>
      <SEO title={title} canonical={canonical} />
      <Topbar />
      <Header active={active} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export const CTAStrip = () => (
  <section className="cta-strip">
    <div className="container">
      <h3>Need a <span>reliable mechanic</span> you can trust? Book your service today.</h3>
      <Link to="/contact" className="btn btn-primary"><i className="fa-solid fa-calendar-check"></i> Book Your Service</Link>
    </div>
  </section>
);
