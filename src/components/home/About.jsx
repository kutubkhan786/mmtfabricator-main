import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
    return (
        <section className="about-section">

            {/* Header */}
            <div className="about-header">
                <div className="logo-wrapper">
                    <svg width="90" height="90" viewBox="0 0 400 300">
                        <g
                            fill="none"
                            stroke="white"
                            strokeWidth="12"
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                        >
                            <line x1="200" y1="60" x2="200" y2="340" />
                            <path d="M 80,340 V 130 L 200,250 L 320,130 V 340" />
                            <path d="M 140,340 V 100 L 200,160 L 260,100 V 340" />
                        </g>
                    </svg>
                </div>

                <h1 className="about-title">MMT FABRICATORS</h1>

                <div className="about-subtitle">
                    Our Commitment to Innovation & Excellence
                </div>
            </div>

            {/* Split Layout */}
            <div className="about-split">

                {/* Image Side */}
                <div className="about-image-side">
                    <div className="about-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                            alt="Glass facade building"
                            className="about-image-main"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                            alt="Aluminium facade structure"
                            className="about-image-secondary"
                        />
                    </div>
                </div>

                {/* Text Side */}
                <div className="about-text-side">

                    <p className="about-commitment-text">
                        The facade and fenestration industry is evolving rapidly—from
                        energy-efficient glazing systems to fire-safe cladding regulations
                        and sustainable materials. At MMT Fabricators, we don't just adapt
                        to change; we lead it. With over 15+ years of hands-on experience
                        across premium residential towers, commercial developments, and
                        luxury projects, we transform architectural visions into tangible
                        landmarks.
                    </p>

                    <div className="about-principles">
                        <span className="principle-tag">
                            Expertise-Driven Execution
                        </span>
                        <span className="principle-tag">
                            Quality Over Speed
                        </span>
                        <span className="principle-tag">
                            Collaborative Partnership
                        </span>
                    </div>

                    <div className="about-cta">
                        <Link to="/about" className="about-button">
                            MORE ABOUT US →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
