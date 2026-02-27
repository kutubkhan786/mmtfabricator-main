import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
    const stats = [
        { number: "15+", label: "Years of Excellence" },
        { number: "200+", label: "Projects Completed" },
        { number: "50+", label: "Happy Clients" },
        { number: "100+", label: "Team Members" }
    ];

    const capabilities = [
        {
            icon: "🏗️",
            title: "Facade Engineering",
            description: "Advanced curtain wall, cladding, and glazing systems"
        },
        {
            icon: "🔧",
            title: "Custom Fabrication",
            description: "Bespoke metal work and architectural elements"
        },
        {
            icon: "📐",
            title: "Design & Detailing",
            description: "Comprehensive shop drawings and 3D modeling"
        },
        {
            icon: "✅",
            title: "Installation",
            description: "Expert on-site installation and project management"
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
                                        <span className="gallery-tag">Facade Engineering</span>
                                    </div>
                                </div>

                                <div className="gallery-item secondary">
                                    <img
                                        src="/assets/images/about/about1.jpeg"
                                        alt="Aluminium composite panel work"
                                        className="gallery-image"
                                    />
                                </div>

                                <div className="gallery-item tertiary">
                                    <img
                                        src="/assets/images/about/about2.jpeg"
                                        alt="Structural glazing details"
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
                                Crafting Landmarks That <span className="highlight">Define Skylines</span>
                            </h2>

                            <p className="about-text">
                                The facade and fenestration industry is evolving rapidly—from
                                energy-efficient glazing systems to fire-safe cladding regulations
                                and sustainable materials. At MMT Fabricators, we don't just adapt
                                to change; we lead it.
                            </p>

                            <p className="about-text">
                                With over <strong>15+ years</strong> of hands-on experience
                                across premium residential towers, commercial developments, and
                                luxury projects, we transform architectural visions into tangible
                                landmarks. Our team of skilled engineers and fabricators ensures
                                every detail meets the highest standards of quality and precision.
                            </p>

                            <div className="about-features">
                                <div className="feature">
                                    <div className="feature-icon">✓</div>
                                    <div className="feature-text">ISO 9001:2015 Certified</div>
                                </div>
                                <div className="feature">
                                    <div className="feature-icon">✓</div>
                                    <div className="feature-text">Specialized in High-Rise Facades</div>
                                </div>
                                <div className="feature">
                                    <div className="feature-icon">✓</div>
                                    <div className="feature-text">Sustainable Material Sourcing</div>
                                </div>
                                <div className="feature">
                                    <div className="feature-icon">✓</div>
                                    <div className="feature-text">Advanced 3D Modeling & BIM</div>
                                </div>
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