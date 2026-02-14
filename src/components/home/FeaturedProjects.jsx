import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

const FeaturedProjects = () => {

    const projects = [

        // ========================
        // COMPLETED PROJECTS
        // ========================

        {
            id: 1,
            name: "Lodha The Park",
            subtitle: "Tower 2 · Worli, Mumbai",
            description: "Premium aluminum windows and facade glazing works executed with high-rise installation precision.",
            status: "Completed"
        },

        {
            id: 4,
            name: "Godrej Emerald",
            subtitle: "Towers 3, 4, 5, 6, 7 · Thane",
            description: "Glass railings, canopy structures, and exterior aluminum fabrication.",
            status: "Completed"
        },

        {
            id: 7,
            name: "Tata La Montana",
            subtitle: "Phase 1, 2 & 3",
            description: "Complete aluminum and facade solutions delivered across all project phases.",
            status: "Completed"
        },
        {
            id: 9,
            name: "Mahindra Happinest",
            subtitle: "Towers 1, 2, 3, 4, 5, 7 · Kalyan",
            description: "Windows, railings, and structural aluminum solutions for mass housing development.",
            status: "Completed"
        },
        {
            id: 10,
            name: "Kalpataru Radiance",
            subtitle: "Premium Residential Development",
            description: "High-quality facade glazing and architectural aluminum installations.",
            status: "Completed"
        },
        {
            id: 15,
            name: "Godrej Riviera",
            subtitle: "Residential Development",
            description: "Facade glazing and structural aluminum systems underway.",
            status: "Ongoing"
        },

    ];


    return (
        <section className="featured-projects">
            <div className="container">

                <div className="featured-header">
                    <div className="featured-header-center">
                        <h2 className="featured-title">
                            Featured <span className="featured-title-highlight">Projects</span>
                        </h2>
                        <span className="featured-line">....................................................</span>
                        <p className="featured-stats">
                            <strong>200+</strong> projects completed · <strong>15+</strong> years · <strong>30+</strong> ongoing
                        </p>
                    </div>


                </div>


                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">

                            <div className="project-image">
                                <img
                                    src="/assets/images/projects/lodhatowers.jpg"
                                    alt={project.name}
                                />

                                <div className="project-overlay">
                                    <div className="project-info">

                                        <span className={`project-status ${project.status.toLowerCase()}`}>
                                            {project.status}
                                        </span>

                                        <h3 className="project-title">
                                            {project.name}
                                        </h3>

                                        <p className="project-subtitle">
                                            {project.subtitle}
                                        </p>

                                        <p className="project-description">
                                            {project.description}
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>


                <div className="featured-cta">
                    <Link to="/projects" className="featured-cta-btn">
                        Explore Complete Portfolio <div style={{fontSize:"26px"}}>→</div>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default FeaturedProjects;
