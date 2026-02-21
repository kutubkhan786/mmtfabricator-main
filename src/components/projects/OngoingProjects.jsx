import React from 'react';
import '../../components/home/FeaturedProjects.css';

const OngoingProjects = () => {

    const projects = [

        {
            id: 11,
            name: "Lodha Palava & Premiere Sector",
            subtitle: "Palava City",
            description: "Ongoing facade glazing and aluminum structural installations.",
            src:"/assets/images/projects/lodha_palva.jpg",
            status: "Ongoing"
        },
        {
            id: 12,
            name: "Lodha Belmondo",
            subtitle: "Pune Region",
            description: "Active glazing and facade work across premium residential towers.",
            src:"/assets/images/projects/lodha_belmondo.jpg",
            status: "Ongoing"
        },
        {
            id: 13,
            name: "Lodha Panache",
            subtitle: "Pune Region",
            description: "Fabrication and architectural aluminum systems currently under execution.",
            src:"/assets/images/projects/lodha_panache.jpg",
            status: "Ongoing"
        },
        {
            id: 14,
            name: "Godrej Exquisite",
            subtitle: "Premium High-Rise Project",
            description: "Premium glass and aluminum installations in progress.",
            src:"/assets/images/projects/godrej_exquisite.jpg",
            status: "Ongoing"
        },
        {
            id: 15,
            name: "Godrej Riviera",
            subtitle: "Residential Development",
            description: "Facade glazing and structural aluminum systems underway.",
            src:"/assets/images/projects/godrej_riveria.jpeg",
            status: "Ongoing"
        },
        {
            id: 16,
            name: "Mahindra Nostalgia",
            subtitle: "Residential Complex",
            description: "Ongoing fabrication and facade structural works.",
            src:"/assets/images/projects/mahindra_nostalgia.jpg",
            status: "Ongoing"
        },
        {
            id: 17,
            name: "Kalpataru Vivant South Pole",
            subtitle: "Premium Residential Project",
            description: "Advanced aluminum glazing and facade installations currently in progress.",
            src:"/assets/images/projects/kalpataru_vivant.jpg",
            status: "Ongoing"
        }
    ];


    return (
        <section className="featured-projects">
            <div className="container">


                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">

                            <div className="project-image">
                                <img
                                    src={project.src}
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

export default OngoingProjects;
