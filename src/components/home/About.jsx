import React from "react";
import { Link } from "react-router-dom";
import "./HomeAbout.css";

const HomeAbout = () => {
    return (
        <section className="home-about-section">

            {/* Header */}
            <div className="home-about-header">
                <div className="home-about-logo-wrapper">
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



                <div className="home-about-title">
                    Our Commitment to Innovation & Excellence
                </div>
            </div>

            {/* Split Layout */}
            <div className="home-about-split">

                {/* Image Side */}
                <div className="home-about-image-side">
                    <div className="home-about-image-wrapper">
                        <img
                            src="/assets/images/about/about2.jpeg"
                            alt="Glass facade building"
                            className="home-about-image-main"
                        />

                        <img
                            src="/assets/images/about/about5.jpeg"
                            alt="Aluminium facade structure"
                            className="home-about-image-secondary"
                        />
                    </div>
                </div>

                {/* Text Side */}
                <div className="home-about-text-side">

                    <p>
                        <strong>Established in 2013</strong>, MMT Fabricators is a
                        single proprietorship firm specializing in the design and
                        fabrication of all types of aluminium window systems and
                        customized solutions.
                    </p>

                    <p>
                        <strong>Trusted Since 2015</strong>, we proudly maintain
                        long-term relationships with repeat clients through quality
                        workmanship and timely execution.
                    </p>

                    <p>
                        <strong>Strong Workforce</strong> – 40 skilled factory
                        professionals and 50+ staff members including qualified
                        design engineers working at back office and on-site.
                    </p>

                    <p>
                        <strong>Advanced Machinery</strong> – Automatic cutting
                        machines, router machines, cordless Hilti drills, and
                        Hilti laser measurement systems for precision and faster output.
                    </p>


                    <div className="home-about-cta">
                        <Link to="/about" className="home-about-button">
                            MORE ABOUT US →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;