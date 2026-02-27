import React from "react";
import { Link } from "react-router-dom";
import "../components/home/About.css";

const AboutPage = () => {
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

            {/* Hero Header with Background */}
            <div className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="container">
                    <div className="about-hero-content">
                        <span className="about-hero-label">Since 2008</span>
                        <h1 className="about-hero-title">
                            Engineering <span className="text-gradient">Architectural</span> Excellence
                        </h1>
                        <p className="about-hero-subtitle">
                            MMT Fabricators: Where precision meets innovation in facade engineering and metal fabrication
                        </p>
                    </div>
                </div>
            </div>


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

            {/* Capabilities Section */}
            <div className="about-capabilities">
                <div className="container">
                    <div className="capabilities-header">
                        <span className="capabilities-label">Our Expertise</span>
                        <h2 className="capabilities-title">What We Do Best</h2>
                    </div>

                    <div className="capabilities-grid">
                        {capabilities.map((item, index) => (
                            <div key={index} className="capability-card">
                                <div className="capability-icon">{item.icon}</div>
                                <h3 className="capability-title">{item.title}</h3>
                                <p className="capability-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="about-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Bring Your Vision to Life?</h2>
                        <p className="cta-text">
                            Partner with us for your next architectural project
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="cta-button primary">
                                Start Your Project
                            </Link>
                            <Link to="/projects" className="cta-button secondary">
                                View Our Work →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;