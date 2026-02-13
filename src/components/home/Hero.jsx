import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {

    // Cursor glow effect
    useEffect(() => {
        const glow = document.querySelector(".cursor-glow");

        const moveGlow = (e) => {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        };

        document.addEventListener("mousemove", moveGlow);

        return () => document.removeEventListener("mousemove", moveGlow);
    }, []);

    return (
        <section className="hero">
            <div className="cursor-glow"></div>
            <div className="hero-overlay"></div>

            <div className="hero-content">

                <div className="hero-svg">
                    <svg width="80" height="80" viewBox="0 0 400 300">
                        <g fill="none" stroke="white" strokeWidth="12">
                            <line x1="200" y1="60" x2="200" y2="340" />
                            <path d="M 80,340 V 130 L 200,250 L 320,130 V 340" />
                            <path d="M 140,340 V 100 L 200,160 L 260,100 V 340" />
                        </g>
                    </svg>
                    <h2 className="hero-logo-text">
                        MMT FABRICATORS
                    </h2>
                </div>
                <div className="hero-lower">
                    <h1 className="hero-title">
                        <span>WE DESIGN</span>
                        <span className="hero-title-highlight">WE FABRICATE</span>
                        <span>WE INSTALL</span>
                    </h1>
                </div>
                <p className="hero-subtitle">
                    <div><b>Aluminum | Glass | Stainless Steel</b></div>
                    <div>Complete architectural solutions</div>
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


            <div className="hero-scroll">
                <div className="hero-scroll-line"></div>
            </div>
        </section >
    );
};

export default Hero;
