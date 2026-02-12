import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>MMT FABRICATORS</h3>
            <p>We design · We fabricate · We install</p>
            <p>A complete solution</p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} MMT Fabricators. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;