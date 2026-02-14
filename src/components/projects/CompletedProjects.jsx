import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/home/FeaturedProjects.css';

const CompletedProjects = () => {

    const projects = [

        {
            id: 1,
            name: "Lodha The Park",
            subtitle: "Tower 2 · Worli, Mumbai",
            description: "Premium aluminum windows and facade glazing works executed with high-rise installation precision.",
            status: "Completed"
        },
        {
            id: 2,
            name: "Lodha NCP",
            subtitle: "Wadala, Mumbai",
            description: "Architectural aluminum and structural glazing solutions for residential towers.",
            status: "Completed"
        },
        {
            id: 3,
            name: "Lodha Bel Air",
            subtitle: "Towers A, B, C · Wadala",
            description: "Facade glazing and high-performance window systems for multiple residential towers.",
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
            id: 5,
            name: "Godrej Urban Park",
            subtitle: "Towers 1, 2, 3, 7, 8, 9 · Thane",
            description: "Spider glazing and structural glass facade systems with premium finish.",
            status: "Completed"
        },
        {
            id: 6,
            name: "Godrej Nirvaan & Upavan",
            subtitle: "Towers 3, 4, 6, 8, 9",
            description: "Comprehensive glazing and aluminum fabrication works across multiple towers.",
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
            id: 8,
            name: "Tata Boisar Project",
            subtitle: "15 Towers · Boisar",
            description: "End-to-end aluminum fabrication and glazing for 15 residential towers.",
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


    ];


    return (
        <section className="featured-projects">
            <div className="container">


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



            </div>
        </section>
    );
};

export default CompletedProjects;
