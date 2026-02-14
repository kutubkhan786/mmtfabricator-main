import React from 'react';
import CompletedProjects from './CompletedProjects';
import OngoingProjects from './OngoingProjects';
import { Link } from 'react-router-dom';
import './ProjectsCards.css';

const ProjectsCards = () => {
    return (
        <section className="projects-section">

            <div className="container">

                {/* ===== HEADER ===== */}
                <div className="projects-header">
                    <div className="projects-header-left">
                        <span className="projects-label">Portfolio</span>
                        <h2 className="projects-title">
                           <span className="projects-title-highlight">Projects</span>
                        </h2>
                    </div>

                    <div className="projects-header-right">
                        <p className="projects-stats">
                            <strong>200+</strong> projects completed ·
                            <strong> 15+</strong> years ·
                            <strong> 30+</strong> ongoing
                        </p>
                        <Link to="/projects" className="projects-view-all">
                            View all projects →
                        </Link>
                    </div>
                </div>

                {/* ===== COMPLETED ===== */}
                <div className="projects-block">
                    <CompletedProjects />
                </div>

                {/* ===== ONGOING ===== */}
                <div className="projects-block">
                    <OngoingProjects />
                </div>

            </div>

        </section>
    );
};

export default ProjectsCards;
