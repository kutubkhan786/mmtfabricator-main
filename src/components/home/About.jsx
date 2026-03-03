import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {


    return (
        <section className="about-section">

            {/* Main Content - Split Layout with Multiple Images */}
            <div className="about-main">
                <div className="container">
                    <div className="about-split">

                        {/* Image Gallery Side */}
                        <div className="about-gallery-side">
                            <div className="gallery-grid">
                                <div className="gallery-item main">
                                    <img
                                        src="/assets/images/about/about2.jpeg"
                                        alt="Modern glass facade installation"
                                        className="gallery-image"
                                    />
                                    <div className="gallery-overlay">
                                        <span className="gallery-tag">Aluminum Glass Railings</span>
                                    </div>
                                </div>

                                <div className="gallery-item secondary">
                                    <img
                                        src="/assets/images/about/about5.jpeg"
                                        alt="Aluminium composite panel work"
                                        className="gallery-image"
                                    />
                                </div>

                                <div className="gallery-item tertiary">
                                    <img
                                        src="/assets/images/about/about3.jpeg"
                                        alt="Structural glazing details"
                                        className="gallery-image"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="about-text-side">
                            <span className="about-section-label" >Who We Are</span>


                            <p className="about-text">
                                <strong>MMT FABRICATORS</strong> is a sole proprietorship firm established in 2013,
                                dedicated to excellence in aluminum fabrication and design. We specialize in
                                designing and fabricating all types of aluminum window series and systems,
                                delivering premium quality solutions to our valued clients.
                            </p>

                            <p className="about-text">
                                <strong>Trusted by clients since 2015</strong>, we take pride in our strong
                                relationships and repeat clientele. Our success is built on a foundation of
                                skilled workforce and state-of-the-art equipment, including automatic cutting
                                machines and router machines that ensure faster output without compromising on quality.
                            </p>

                            <div className="about-strength">
                                <h3>Our Strength</h3>
                                <div className="strength-grid">
                                    <div className="strength-item">
                                        <span className="strength-number">40+</span>
                                        <span className="strength-label">Skilled Labours at Factory</span>
                                    </div>
                                    <div className="strength-item">
                                        <span className="strength-number">50+</span>
                                        <span className="strength-label">Staff Members (Office & Site)</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="about-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Want to know more about<br /> MMT FABRICATORS?</h2>
                        <div className="cta-buttons">
                            <Link to="/about" className="cta-button secondary">
                                View More About Us →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;