import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Aluminum Windows',
            description: 'Sliding windows, casement windows, and custom solutions for residential and commercial projects.',
            icon: '⊞'
        },
        {
            id: 2,
            title: 'Glass & SS Railing',
            description: 'Aluminum, glass, and stainless steel railings with premium finishes and safety standards.',
            icon: '⎯'
        },
        {
            id: 3,
            title: 'Glass Canopy',
            description: 'Elegant overhead protection with structural glass and minimalist framing.',
            icon: '⌂'
        },
        {
            id: 4,
            title: 'Façade Glazing',
            description: 'Curtain walls, structural glazing, and unitized facade systems.',
            icon: '▦'
        },
        {
            id: 5,
            title: 'ACP Panel Works',
            description: 'Aluminum composite panel cladding for modern architectural finishes.',
            icon: '▧'
        },
        {
            id: 6,
            title: 'Spider Glazing',
            description: 'Point-supported glass systems with stainless steel spider fittings.',
            icon: '⦿'
        },
        {
            id: 7,
            title: 'Aluminum Mesh',
            description: 'Decorative and functional mesh systems for facades and interiors.',
            icon: '⌗'
        }
    ];

    return (
        <section className="services">
            <div className="container">
                <div className="services-header">
                    <span className="services-label">What We Do</span>
                    <h2 className="services-title">Complete <span className="services-title-highlight">architectural solutions</span></h2>
                    <p className="services-subtitle">
                        From design to installation — precision engineering for premium residential and commercial projects
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <Link to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="service-link">
                                Learn more →
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <Link to="/contact" className="services-btn">
                        Discuss Your Project
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;