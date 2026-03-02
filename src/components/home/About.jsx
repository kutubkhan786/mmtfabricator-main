import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
    const stats = [
        { number: "2013", label: "Company Founded" },
        { number: "40+", label: "Skilled Labours" },
        { number: "50+", label: "Total Staff" },
        { number: "2015", label: "Trusted Since" }
    ];

    const capabilities = [
        {
            icon: "🏗️",
            title: "Aluminum Systems",
            description: "Design and fabrication of all aluminum window series and systems"
        },
        {
            icon: "🔧",
            title: "Advanced Machinery",
            description: "Automatic cutting machines & router machines for faster output"
        },
        {
            icon: "📐",
            title: "Expert Engineering",
            description: "Qualified engineers for precise designing and detailing"
        },
        {
            icon: "🛠️",
            title: "Premium Tools",
            description: "Cordless Hilti drill machines & laser machines for perfect measurements"
        }
    ];

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

                                <div className="gallery-item quaternary">
                                    <img
                                        src="/assets/images/about/about4.jpeg"
                                        alt="Metal fabrication workshop"
                                        className="gallery-image"
                                    />
                                </div>
                                <div className="gallery-item quaternary">
                                    <img
                                        src="/assets/images/about/about1.jpeg"
                                        alt="Metal fabrication workshop"
                                        className="gallery-image"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="about-text-side">
                            <span className="about-section-label">Who We Are</span>
                            <h2 className="about-section-title">
                                MMT FABRICATORS – <span className="highlight">Since 2013</span>
                            </h2>

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

                            <div className="about-features">
                                <div className="feature">
                                    <div className="feature-icon">✓</div>
                                    <div className="feature-text">Qualified Engineers for Designing</div>
                                </div>
                                <div className="feature">
                                    <div className="feature-icon">✓</div>
                                    <div className="feature-text">Cordless Hilti Drill Machines</div>
                                </div>
                                <div className="feature">
                                    <div className="feature-icon">✓</div>
                                    <div className="feature-text">Hilti Laser Machines for Perfect Measurements</div>
                                </div>
                                <div className="feature">
                                    <div className="feature-icon">✓</div>
                                    <div className="feature-text">Own Designed & Tested Aluminum Railing System</div>
                                </div>
                                <div className="feature">
                                    <div className="feature-icon">✓</div>
                                    <div className="feature-text">Skilled & Trusted Sub Contractors</div>
                                </div>
                            </div>

                            <div className="about-expertise" style={{marginTop:"5px"}}>
                                <h3>Special Expertise</h3>
                                <p className="expertise-text">
                                    We are experts in <strong>Aluminum Glass Railings</strong> with our own
                                    designed and tested aluminum railing system, ensuring safety, durability,
                                    and aesthetic appeal in every installation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Want to know more about MMT FABRICATORS?</h2>
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