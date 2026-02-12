import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
    const projects = [
        {
            id: 1,
            name: 'Lodha The Park',
            location: 'Worli, Mumbai',
            client: 'Lodha Developers',
            tower: 'Tower 2',
            category: 'Aluminum Windows & Glazing'
        },
        {
            id: 2,
            name: 'Godrej Emerald',
            location: 'Thane, Mumbai',
            client: 'Godrej Properties',
            tower: 'Tower 3, 4, 5, 6, 7',
            category: 'Glass Railings & Canopy'
        },
        {
            id: 3,
            name: 'Lodha Bel Air',
            location: 'Wadala, Mumbai',
            client: 'Lodha Developers',
            tower: 'Tower A, B, C',
            category: 'Facade Glazing'
        },
        {
            id: 4,
            name: 'Tata Boisar Project',
            location: 'Boisar, Maharashtra',
            client: 'Tata Realty',
            tower: '15 Towers',
            category: 'Complete Aluminum Solutions'
        },
        {
            id: 5,
            name: 'Mahindra Happinest',
            location: 'Kalyan, Mumbai',
            client: 'Mahindra Lifespace',
            tower: 'Tower 1, 2, 3, 4, 5, 7',
            category: 'Windows & Railings'
        },
        {
            id: 6,
            name: 'Godrej Urban Park',
            location: 'Thane, Mumbai',
            client: 'Godrej Properties',
            tower: 'Tower 1, 2, 3, 7, 8, 9',
            category: 'Spider Glazing'
        }
    ];

    return (
        <section className="featured-projects">
            <div className="container">
                <div className="featured-header">
                    <div className="featured-header-left">
                        <span className="featured-label">Portfolio</span>
                        <h2 className="featured-title">Featured <span className="featured-title-highlight">projects</span></h2>
                    </div>
                    <div className="featured-header-right">
                        <p className="featured-stats">
                            <strong>200+</strong> projects completed · <strong>15+</strong> years · <strong>30+</strong> ongoing
                        </p>
                        <Link to="/projects" className="featured-view-all">
                            View all projects →
                        </Link>
                    </div>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-placeholder">
                                <div className="project-svg">
                                    <svg width="60" height="60" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" stroke="black" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter" opacity="0.2">
                                            <line x1="200" y1="60" x2="200" y2="340" />
                                            <path d="M 80,340 V 130 L 200,250 L 320,130 V 340" />
                                            <path d="M 140,340 V 100 L 200,160 L 260,100 V 340" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-category">{project.category}</div>
                                <h3 className="project-name">{project.name}</h3>
                                <p className="project-location">{project.location}</p>
                                <div className="project-meta">
                                    <span className="project-client">{project.client}</span>
                                    <span className="project-tower">{project.tower}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="featured-cta">
                    <Link to="/projects" className="featured-cta-btn">
                        Explore complete portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;