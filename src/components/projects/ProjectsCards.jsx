import React from 'react';
import './ProjectsCards.css';
import AllProjects from './AllProjects';

const ProjectsCards = () => {
    return (
        <section className="projects-section">

            <div className="container">

                {/* ===== HEADER ===== */}
                <div className="projects-header">
                    <div >
                        <span className="projects-label">Portfolio</span>
                        <h2 className="projects-title">
                            <span className="projects-title-highlight">Projects</span>
                        </h2>
                    </div>

                    {/* <div className="projects-header-right">
                        <p className="projects-stats">
                            <strong>200+</strong> projects completed ·
                            <strong> 15+</strong> years ·
                            <strong> 30+</strong> ongoing
                        </p>

                    </div> */}
                </div>
                <div className="projects-block">
                    <AllProjects />
                </div>



            </div>

        </section>
    );
};

export default ProjectsCards;
