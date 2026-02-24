import React from "react";
import "../components/home/Services.css";

const ServicePage = () => {
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
        {
            id: 4,
            title: "Façade Glazing",
            description:
                "Curtain walls, structural glazing and high-performance facade systems.",
            image:
                "/assets/images/services/facadeglazing.jpg"
        },
        {
            id: 5,
            title: "ACP Panel Works",
            description:
                "Aluminum composite cladding delivering premium exterior finishes.",
            image:
                "/assets/images/services/acppanel.jpg"
        },
        {
            id: 6,
            title: "Spider Glazing",
            description:
                "Frameless point-supported glazing with stainless spider fittings.",
            image:
                "/assets/images/services/spiderglazing.jpg"
        },
        {
            id: 7,
            title: "Aluminum Mesh",
            description:
                "Architectural mesh systems for decorative and functional applications.",
            image:
                "/assets/images/services/mesh.jpg"
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
