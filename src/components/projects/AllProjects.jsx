import React, { useState } from 'react';
import '../../components/home/FeaturedProjects.css';

const AllProjects = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const projects = [
        {
            id: 1,
            name: "Lodha The Park",
            subtitle: "Tower 2 · Worli, Mumbai",
            description: "Premium aluminum windows and facade glazing works executed with high-rise installation precision.",
            src: "/assets/images/projects/lodha_park.jpg",
            status: "Completed"
        },
        {
            id: 2,
            name: "Lodha NCP",
            subtitle: "Wadala, Mumbai",
            description: "Architectural aluminum and structural glazing solutions for residential towers.",
            src: "/assets/images/projects/lodha_ncp.jpg",
            status: "Completed"
        },
        {
            id: 3,
            name: "Lodha Bel Air",
            subtitle: "Towers A, B, C · Wadala",
            description: "Facade glazing and high-performance window systems for multiple residential towers.",
            src: "/assets/images/projects/lodha_bel_air.jpg",
            status: "Completed"
        },
        {
            id: 4,
            name: "Godrej Emerald",
            subtitle: "Towers 3, 4, 5, 6, 7 · Thane",
            description: "Glass railings, canopy structures, and exterior aluminum fabrication.",
            src: "/assets/images/projects/godrej_emerald.jpg",
            status: "Completed"
        },
        {
            id: 5,
            name: "Godrej Urban Park",
            subtitle: "Towers 1, 2, 3, 7, 8, 9 · Thane",
            description: "Spider glazing and structural glass facade systems with premium finish.",
            src: "/assets/images/projects/godrej_urban.jpg",
            status: "Completed"
        },
        {
            id: 6,
            name: "Godrej Nirvaan & Upavan",
            subtitle: "Towers 3, 4, 6, 8, 9",
            description: "Comprehensive glazing and aluminum fabrication works across multiple towers.",
            src: "/assets/images/projects/godrej_nirvaan.jpg",
            status: "Completed"
        },
        {
            id: 7,
            name: "Tata La Montana",
            subtitle: "Phase 1, 2 & 3",
            description: "Complete aluminum and facade solutions delivered across all project phases.",
            src: "/assets/images/projects/tata_la_montana.jpg",
            status: "Completed"
        },
        {
            id: 8,
            name: "Tata Boisar Project",
            subtitle: "15 Towers · Boisar",
            description: "End-to-end aluminum fabrication and glazing for 15 residential towers.",
            src: "/assets/images/projects/tata_boisar.jpg",
            status: "Completed"
        },
        {
            id: 9,
            name: "Mahindra Happinest",
            subtitle: "Towers 1, 2, 3, 4, 5, 7 · Kalyan",
            description: "Windows, railings, and structural aluminum solutions for mass housing development.",
            src: "/assets/images/projects/mahindra_happinest.jpg",
            status: "Completed"
        },
        {
            id: 10,
            name: "Kalpataru Radiance",
            subtitle: "Premium Residential Development",
            description: "High-quality facade glazing and architectural aluminum installations.",
            src: "/assets/images/projects/kalpataru_radiance.jpg",
            status: "Completed"
        }, {
            id: 11,
            name: "Lodha Palava & Premiere Sector",
            subtitle: "Palava City",
            description: "Ongoing facade glazing and aluminum structural installations.",
            src: "/assets/images/projects/lodha_palva.jpg",
            status: "Ongoing"
        },
        {
            id: 12,
            name: "Lodha Belmondo",
            subtitle: "Pune Region",
            description: "Active glazing and facade work across premium residential towers.",
            src: "/assets/images/projects/lodha_belmondo.jpg",
            status: "Ongoing"
        },
        {
            id: 13,
            name: "Lodha Panache",
            subtitle: "Pune Region",
            description: "Fabrication and architectural aluminum systems currently under execution.",
            src: "/assets/images/projects/lodha_panache.jpg",
            status: "Ongoing"
        },
        {
            id: 14,
            name: "Godrej Exquisite",
            subtitle: "Premium High-Rise Project",
            description: "Premium glass and aluminum installations in progress.",
            src: "/assets/images/projects/godrej_exquisite.jpg",
            status: "Ongoing"
        },
        {
            id: 15,
            name: "Godrej Riviera",
            subtitle: "Residential Development",
            description: "Facade glazing and structural aluminum systems underway.",
            src: "/assets/images/projects/godrej_riveria.jpeg",
            status: "Ongoing"
        },
        {
            id: 16,
            name: "Mahindra Nostalgia",
            subtitle: "Residential Complex",
            description: "Ongoing fabrication and facade structural works.",
            src: "/assets/images/projects/mahindra_nostalgia.jpg",
            status: "Ongoing"
        },
        {
            id: 17,
            name: "Kalpataru Vivant South Pole",
            subtitle: "Premium Residential Project",
            description: "Advanced aluminum glazing and facade installations currently in progress.",
            src: "/assets/images/projects/kalpataru_vivant.jpg",
            status: "Ongoing"
        }
    ];

    // Filter projects based on search term
    const filteredProjects = projects.filter(project => {
        const searchLower = searchTerm.toLowerCase();
        return (
            project.name.toLowerCase().includes(searchLower) ||
            project.subtitle.toLowerCase().includes(searchLower) ||
            project.description.toLowerCase().includes(searchLower) ||
            project.status.toLowerCase().includes(searchLower)
        );
    });

    return (
        <section className="featured-projects">
            <div className="container">
                {/* Search Box */}
                <div className="search-container">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search projects by name, location, description, or status..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        {searchTerm && (
                            <button
                                className="clear-search"
                                onClick={() => setSearchTerm('')}
                            >
                                ×
                            </button>
                        )}
                    </div>

                    {/* Search Results Count */}
                    <div className="search-results-info">
                        Showing {filteredProjects.length} of {projects.length} projects
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-image">
                                    <img
                                        src={project.src}
                                        alt={project.name}
                                    />
                                    <div className="project-overlay">
                                        <div className="project-info">
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
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No projects found matching "{searchTerm}"</p>
                            <button
                                className="clear-search-btn"
                                onClick={() => setSearchTerm('')}
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AllProjects;