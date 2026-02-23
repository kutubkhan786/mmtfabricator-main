import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with India's trusted architectural solutions provider</p>
                </div>
            </section>

            {/* Main Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Company Info Section */}
                        <div className="company-info-card">
                            <div className="company-header">
                                <h2>MMT FABRICATORS</h2>
                                <p className="tagline">We design · We fabricate · We install</p>
                                <p className="description">
                                    Complete architectural solutions for premium residential and commercial projects.
                                    Trusted by India's leading developers since 2010.
                                </p>
                                <div className="gst-info">
                                    <strong>GST:</strong> 27AGNPR6682L2ZN
                                </div>
                            </div>
                        </div>

                        {/* Directors Contact */}
                        <div className="contact-card">
                            <h3>Directors</h3>
                            <div className="director-info">
                                <div className="director">
                                    <h4>Mr. Shabbir Radiowala</h4>
                                    <a href="tel:+919892109482" className="phone-link">
                                        <i className="phone-icon"></i> +91 98921 09482
                                    </a>
                                </div>
                                <div className="director">
                                    <h4>Mr. Mohammed Radiowala</h4>
                                    <a href="tel:+917506406498" className="phone-link">
                                        <i className="phone-icon"></i> +91 75064 06498
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email Contact */}
                        <div className="contact-card">
                            <h3>Email</h3>
                            <div className="email-info">
                                <a href="mailto:projects@mmtfabricators.com" className="email-link">
                                    <i className="email-icon"></i> projects@mmtfabricators.com
                                </a>
                            </div>
                        </div>

                        {/* Office Location */}
                        <div className="location-card">
                            <h3>Office</h3>
                            <address>
                                Block No. 17, Ground Floor<br />
                                Shukla Chawl, Plot No. 249<br />
                                Barrister Nath Pai Marg, Mazgaon<br />
                                Mumbai, Maharashtra - 400010
                            </address>
                            <a
                                href="https://maps.google.com/?q=Barrister+Nath+Pai+Marg+Mazgaon+Mumbai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-link"
                            >
                                View on Google Maps
                            </a>
                        </div>

                        {/* Factory Location */}
                        <div className="location-card">
                            <h3>Factory</h3>
                            <address>
                                C12, Atlanta Mill Compound<br />
                                Mumbai-Nashik Highway Road<br />
                                Sonale Village, Bhiwandi<br />
                                Mumbai, Maharashtra - 421302
                            </address>
                            <a
                                href="https://maps.google.com/?q=Atlanta+Mill+Compound+Bhiwandi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-link"
                            >
                                View on Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </section>



            {/* Map Embed Section (Optional) */}
            <section className="map-section">
                <div className="container">
                    <h3>Our Locations</h3>
                    <div className="map-grid">
                        <div className="map-card">
                            <h4>Mumbai Office</h4>
                            <div className="map-placeholder">
                                {/* You can embed actual Google Maps iframe here */}
                                <iframe
                                    title="Mumbai Office Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.979322995047!2d72.84152397373356!3d18.976520555090893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5385998185%3A0xe8188ef1a02a634e!2sBarrister%20Nath%20Pai%20Marg%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1771867909274!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                        <div className="map-card">
                            <h4>Bhiwandi Factory</h4>
                            <div className="map-placeholder">
                                {/* You can embed actual Google Maps iframe here */}
                                <iframe
                                    title="Bhiwandi Factory Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60312.43576774917!2d73.02188049618534!3d19.296664273891783!2m3!1f0!2f0!3m0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd79d2b83441%3A0x86847833075b3648!2sBhiwandi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708680000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;