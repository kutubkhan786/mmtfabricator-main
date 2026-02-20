import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Aluminum Windows',
    'Glass & SS Railing',
    'Glass Canopy',
    'Façade Glazing',
    'ACP Panel Works',
    'Spider Glazing',
    'Aluminum Mesh'
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-grid ">
        {/* Company Info */}
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <div className='footer-logo-img'>
              <svg width="48" height="48" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="white" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter">
                  <line x1="200" y1="60" x2="200" y2="340" />
                  <path d="M 80,340 V 130 L 200,250 L 320,130 V 340" />
                  <path d="M 140,340 V 100 L 200,160 L 260,100 V 340" />
                </g>
              </svg>
            </div>
            <h2>MMT FABRICATORS</h2>
          </div>
          <p className="footer-tagline">We design · We fabricate · We install</p>
          <p className="footer-description">
            Complete architectural solutions for premium residential and commercial projects.
            Trusted by India's leading developers since 2010.
          </p>
          <div className="footer-gst">
            <span className="footer-gst-label">GST:</span>
            <span className="footer-gst-number">27AGNPR6062L2ZN</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="footer-links">
            {services.map((service, index) => (
              <li key={index}>
                <Link to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}>
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact  */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>

          <div className="footer-contact">
            <div className="footer-contact-item">
              <span className="footer-contact-label">Directors:</span>
              <div className="footer-contact-detail">
                <p>Mr. Shabbir Radiowala</p>
                <a href="tel:+919892109482">+91 98921 09482</a>
              </div>
              <div className="footer-contact-detail">
                <p>Mr. Mohammed Radiowala</p>
                <a href="tel:+917506406498">+91 75064 06498</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-label">Email:</span>
              <div className="footer-contact-detail">
                <a href="mailto:projects@mmtfabricators.com">projects@mmtfabricators.com</a>
              </div>
            </div>
          </div>
        </div>
        {/* Address  */}
        <div className="footer-section">
          <h3 className="footer-heading">Locations</h3>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Office:</span>
            <div className="footer-contact-detail">
              <p>Block No. 17, Ground Floor</p>
              <p>Shukla Chawl, Plot No. 249</p>
              <p>Barrister Nath Pai Marg, Mazgaon</p>
              <p>Mumbai, Maharashtra - 400010</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Factory:</span>
            <div className="footer-contact-detail">
              <p>C12, Atlanta Mill Compound</p>
              <p>Mumbai-Nashik Highway Road</p>
              <p>Sonale Village, Bhiwandi</p>
              <p>Mumbai, Maharashtra - 421302</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>© {currentYear} MMT Fabricators. All rights reserved.</p>
        </div>
        <div className="footer-copyright">
          <a
            href="https://www.brixsmedia.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: "200",
              fontSize: "12px",
              transition: "opacity 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Developed and Maintained by BrixsMedia
          </a>
        </div>
      </div>
    </footer >
  );
};

export default Footer;