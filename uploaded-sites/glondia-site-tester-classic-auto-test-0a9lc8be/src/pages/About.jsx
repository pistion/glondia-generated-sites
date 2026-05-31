import React from 'react';
import { Link } from 'react-router-dom';
import { PageShell, CTAStrip } from '../components/Shared';

const VALUES = [
  { icon: "fa-handshake",    title: "Integrity",  desc: "Honest quotes, transparent reporting, and no work done without your approval." },
  { icon: "fa-screwdriver-wrench", title: "Craftsmanship", desc: "Skilled technicians who treat every job — small or large — with care and precision." },
  { icon: "fa-people-group", title: "Community", desc: "Locally owned and proudly serving the people and businesses of Port Moresby." },
  { icon: "fa-leaf",         title: "Responsibility", desc: "Proper disposal of oils, fluids and parts so our work doesn't cost the environment." },
];

const TEAM = [
  { name: "Workshop Foreman", role: "Lead Mechanic",      bio: "Heads up daily operations and quality control on every job." },
  { name: "Senior Technician", role: "Engine Specialist",  bio: "Engine rebuilds, diagnostics and complex mechanical work." },
  { name: "Service Advisor",   role: "Customer Care",      bio: "Your first point of contact — bookings, quotes, and updates." },
  { name: "Auto Electrician",  role: "Electrical Lead",    bio: "Wiring, batteries, alternators and electronic fault finding." },
  { name: "Panel & Spray Tech", role: "Body Repair",       bio: "Panel beating, dent removal and full body resprays." },
  { name: "Apprentice",        role: "Assistant Mechanic", bio: "Trained on the job — assisting across all service areas." },
];

const About = () => (
  <PageShell active="about" title="About — Classic Auto Services Ltd">
    <section className="page-head">
      <h1>About Us</h1>
      <p>Trusted automotive expertise built in Port Moresby — by locals, for locals.</p>
      <div className="crumbs">
        <Link to="/">Home</Link> <i className="fa-solid fa-chevron-right"></i> <span>About</span>
      </div>
    </section>

    {/* INTRO */}
    <section>
      <div className="container">
        <div className="about-hero">
          <div className="copy reveal">
            <span className="eyebrow">Our Story</span>
            <h2>Driven By Quality, Backed By Experience</h2>
            <p>Classic Auto Services Ltd was founded with a simple mission: give Port Moresby drivers a workshop they can actually trust. No upsells, no jargon — just good mechanics doing great work.</p>
            <p>Today our team handles everything from quick oil changes to complete engine rebuilds, panel work and auto-electrical diagnostics. We specialise in Toyota and Nissan vehicles — the SUVs and sedans most common on PNG roads — and we treat every car like our own.</p>
            <div className="mini-stats">
              <div><strong>7+</strong><span>Years Serving</span></div>
              <div><strong>1.2K+</strong><span>Vehicles Repaired</span></div>
              <div><strong>98%</strong><span>Return Customers</span></div>
            </div>
          </div>
          <div className="img-wrap reveal delay-2">
            <img src="/assets/flyer-services.jpg" alt="Classic Auto Services flyer" />
          </div>
        </div>
      </div>
    </section>

    {/* TEAM PHOTO BANNER */}
    <section className="bg-paper" style={{paddingTop: 60}}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our People</span>
          <h2>Meet The Team</h2>
          <p>The technicians, advisors and apprentices who keep Port Moresby moving — together since day one.</p>
        </div>
        <div className="team-photo-banner reveal">
          <img src="/assets/team.jpg" alt="Classic Auto Services Ltd team" />
          <div className="cap">
            <strong>The Classic Auto Crew</strong>
            <span>Port Moresby Workshop</span>
          </div>
        </div>
      </div>
    </section>

    {/* TEAM CARDS */}
    <section>
      <div className="container">
        <div className="team-grid">
          {TEAM.map((t, i) => (
            <div className={`team-card reveal delay-${(i % 3) + 1}`} key={i}>
              <div className="photo">
                <i className="fa-solid fa-user-gear"></i>
              </div>
              <div className="body">
                <h4>{t.name}</h4>
                <div className="role">{t.role}</div>
                <p>{t.bio}</p>
                <div className="socials">
                  <a href="#" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
                  <a href="#" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                  <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* VALUES */}
    <section className="bg-navy">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What We Stand For</span>
          <h2>Our Core Values</h2>
          <p>The principles that guide every job that rolls through our gate.</p>
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

    <CTAStrip />
  </PageShell>
);

export default About;
