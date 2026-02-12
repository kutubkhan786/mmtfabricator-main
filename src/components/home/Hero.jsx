import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <div className="hero-grid">
                    <div className="hero-left">
                        <div className="hero-svg">
                            <svg width="120" height="120" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="white" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter">
                                    <line x1="200" y1="60" x2="200" y2="340" />
                                    <path d="M 80,340 V 130 L 200,250 L 320,130 V 340" />
                                    <path d="M 140,340 V 100 L 200,160 L 260,100 V 340" />
                                </g>
                            </svg>
                        </div>
                        <h1 className="hero-title">
                            WE DESIGN
                            <br />
                            <span className="hero-title-highlight">WE FABRICATE</span>
                            <br />
                            WE INSTALL
                        </h1>
                        <p className="hero-subtitle">
                            Aluminum · Glass · Stainless Steel
                            <br />
                            Complete architectural solutions
                        </p>
                        <div className="hero-cta">
                            <Link to="/contact" className="hero-btn hero-btn-primary">
                                Start Project
                            </Link>
                            <Link to="/projects" className="hero-btn hero-btn-secondary">
                                View Work
                            </Link>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="hero-stats-mini">
                            <div className="hero-stat-item">
                                <span className="hero-stat-number">200+</span>
                                <span className="hero-stat-label">Projects</span>
                            </div>
                            <div className="hero-stat-divider"></div>
                            <div className="hero-stat-item">
                                <span className="hero-stat-number">15+</span>
                                <span className="hero-stat-label">Years</span>
                            </div>
                            <div className="hero-stat-divider"></div>
                            <div className="hero-stat-item">
                                <span className="hero-stat-number">30+</span>
                                <span className="hero-stat-label">Ongoing</span>
                            </div>
                        </div>
                        <div className="hero-clients">
                            <p className="hero-clients-label">Trusted by</p>
                            <div className="hero-clients-logos">
                                <span>LODHA</span>
                                <span>GODREJ</span>
                                <span>MAHINDRA</span>
                                <span>TATA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-scroll">
                <span>Scroll</span>
                <div className="hero-scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;