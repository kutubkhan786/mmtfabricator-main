import React from "react";
import { Link } from "react-router-dom";
import "../components/home/Services.css";

const ServicePage = () => {
    const services = [
        {
            id: 1,
            title: "Aluminum Windows",
            description:
                "Sliding, casement, and custom aluminum window systems engineered for durability and elegance.",
            image:
                "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 2,
            title: "Glass & SS Railing",
            description:
                "Premium stainless steel and glass railing systems built with precision and safety compliance.",
            image:
                "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 3,
            title: "Glass Canopy",
            description:
                "Minimal structural glass canopy solutions for modern architectural aesthetics.",
            image:
                "https://images.unsplash.com/photo-1523419409543-a5e549c1c5a9?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 4,
            title: "Façade Glazing",
            description:
                "Curtain walls, structural glazing and high-performance facade systems.",
            image:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 5,
            title: "ACP Panel Works",
            description:
                "Aluminum composite cladding delivering premium exterior finishes.",
            image:
                "https://images.unsplash.com/photo-1505842465776-3d90f616310d?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 6,
            title: "Spider Glazing",
            description:
                "Frameless point-supported glazing with stainless spider fittings.",
            image:
                "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 7,
            title: "Aluminum Mesh",
            description:
                "Architectural mesh systems for decorative and functional applications.",
            image:
                "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80"
        }

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
            </div>
        </section>
    );
};

export default ServicePage;
