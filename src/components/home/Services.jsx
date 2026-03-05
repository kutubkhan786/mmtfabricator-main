import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Aluminum Windows",
            description:
                "Sliding, casement, and custom aluminum window systems engineered for durability and elegance.",
            image:
                "/assets/images/services/ALwindow.jpg"
        },
        {
            id: 2,
            title: "Glass & SS Railing",
            description:
                "Premium stainless steel and glass railing systems built with precision and safety compliance.",
            image:
                "/assets/images/services/glasandssr.jpg"
        },
        {
            id: 3,
            title: "Glass Canopy",
            description:
                "Minimal structural glass canopy solutions for modern architectural aesthetics.",
            image:
                "/assets/images/services/GlassCanopy.jpg"
        },

    ];

    return (
        <section className="services">
            <div className="container serviceContainer">
                <div className="services-header">
                    <span className="services-label">What We Do</span>
                    <h2 className="services-title">
                        Architectural <span>Excellence</span>
                    </h2>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div
                                className="service-image"
                                style={{ backgroundImage: `url(${service.image})` }}
                            ></div>

                            <div className="service-content">
                                <h3>{service.title}</h3>
                            </div>

                            <div className="service-overlay">

                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="home-services-cta" style={{ display: "flex", justifyContent: "center" }}>
                    <Link to="/services" className="home-services-button">
                        Explore Services →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
