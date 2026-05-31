import React from 'react';
import { Link } from 'react-router-dom';
import { PageShell, CTAStrip } from '../components/Shared';

const SERVICES = [
  { icon: "fa-gauge-high",     title: "Brakes & Suspension",  desc: "Brakes, suspension and wheel-bearing service for safe, smooth handling on every road." },
  { icon: "fa-gears",           title: "Engine Services",      desc: "Tune-ups, oil & filter changes, timing belts and complete engine overhauls." },
  { icon: "fa-snowflake",       title: "Airconditioning",      desc: "A/C regassing, leak checks and full climate-control repairs to beat the heat." },
  { icon: "fa-spray-can-sparkles", title: "Panel & Spray Painting", desc: "Crash repairs, dent removal and showroom-quality respraying in our spray booth." },
  { icon: "fa-bolt",            title: "Electrical",           desc: "Batteries, alternators, starters and complete auto-electrical fault finding." },
  { icon: "fa-magnifying-glass-chart", title: "Diagnostic Scanning", desc: "Computer diagnostic scanning to pinpoint faults fast and fix them properly." },
];

const VALUES = [
  { icon: "fa-medal",          title: "Certified Techs",  desc: "Trained mechanics with years of hands-on experience." },
  { icon: "fa-hand-holding-dollar", title: "Honest Pricing",   desc: "Clear quotes after inspection — no surprises later." },
  { icon: "fa-stopwatch",      title: "Fast Turnaround",  desc: "Most services completed in 30–45 minutes." },
  { icon: "fa-shield-halved",  title: "Quality Parts",    desc: "Genuine and OEM-grade parts you can rely on." },
];

const REVIEWS = [
  { name: "Joseph K.", role: "Toyota Hilux owner", stars: 5,
    text: "Brought my Hilux in for a brake & tyre service. Quick, professional, and the price matched the quote exactly. Highly recommend Classic Auto." },
  { name: "Maria T.", role: "Nissan Navara owner", stars: 5,
    text: "The team caught a suspension issue during inspection that two other shops missed. Fair pricing and great service. I won't go anywhere else." },
  { name: "Daniel W.", role: "Fleet manager", stars: 5,
    text: "We service our company vehicles here. Reliable, transparent and always on time. The diagnostic scanning has saved us thousands." },
];

const Home = () => (
  <PageShell active="home" title="Classic Auto Services Ltd — Trusted Vehicle Repairs in Port Moresby">
    {/* HERO */}
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <span className="eyebrow reveal">Port Moresby · Since 2018</span>
          <h1 className="reveal delay-1">
            Automotive
            <span className="accent">Services</span>
          </h1>
          <p className="lead reveal delay-2">
            Your trusted vehicle repairs and service centre. From routine maintenance to complex diagnostics — Classic Auto Services keeps your car running like new.
          </p>
          <div className="hero-ctas reveal delay-3">
            <Link to="/contact" className="btn btn-primary"><i className="fa-solid fa-calendar-check"></i> Book Now</Link>
            <Link to="/services" className="btn btn-ghost"><i className="fa-solid fa-wrench"></i> Our Services</Link>
          </div>
          <div className="hero-stats reveal delay-4">
            <div className="stat"><strong>7+</strong><span>Years on the road</span></div>
            <div className="stat"><strong>1.2K+</strong><span>Happy customers</span></div>
            <div className="stat"><strong>6</strong><span>Service categories</span></div>
          </div>
        </div>

        <div className="hero-collage reveal delay-2" aria-hidden="true">
          <div className="photo p1"><img src="/assets/flyer-services.jpg" alt="Mechanic working" style={{objectPosition: "right top", transform: "scale(1.4) translate(15%, -2%)"}} /></div>
          <div className="photo p2"><img src="/assets/team.jpg" alt="Our team" /></div>
          <div className="photo p3"><img src="/assets/flyer-services.jpg" alt="Spray work" style={{objectPosition: "right bottom", transform: "scale(1.6) translate(15%, 18%)"}} /></div>
          <div className="badge">
            <i className="fa-solid fa-certificate"></i>
            <div>
              <strong>Certified</strong>
              <span>Workshop & Technicians</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What We Offer</span>
          <h2>Our Services</h2>
          <p>Everything your vehicle needs under one roof — from quick maintenance checks to full mechanical repairs.</p>
        </div>
        <div className="service-grid">
          {SERVICES.map((s, i) => (
            <div className={`service-card reveal delay-${(i % 4) + 1}`} key={s.title}>
              <div className="icon"><i className={`fa-solid ${s.icon}`}></i></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link className="more" to="/services">Learn more <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHY US */}
    <section className="bg-navy">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Built On Trust, Powered By Skill</h2>
          <p>We treat every vehicle that comes through our gate like our own. Honest advice, careful workmanship, and quality parts — every time.</p>
        </div>
        <div className="value-grid">
          {VALUES.map((v, i) => (
            <div className={`value reveal delay-${i+1}`} key={v.title}>
              <i className={`fa-solid ${v.icon}`}></i>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* REVIEWS */}
    <section className="bg-paper">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Customer Reviews</span>
          <h2>What Our Customers Say</h2>
          <p>Real feedback from real customers across Port Moresby. We're proud to keep their vehicles — and their families — safe on the road.</p>
        </div>
        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <div className={`review reveal delay-${i+1}`} key={r.name}>
              <div className="quote"><i className="fa-solid fa-quote-right"></i></div>
              <div className="stars">{"★".repeat(r.stars)}</div>
              <p>"{r.text}"</p>
              <div className="who">
                <div className="avatar">{r.name[0]}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTAStrip />
  </PageShell>
);

export default Home;
