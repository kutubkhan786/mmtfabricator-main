import React from 'react';
import './Stats.css';

const Stats = () => {
    const stats = [
        { number: '200+', label: 'Projects Completed', sublabel: 'In last 15+ years' },
        { number: '30+', label: 'Ongoing Projects', sublabel: 'Currently in execution' },
        { number: '20k', label: 'Sq.ft Facility', sublabel: 'Ground + 1 floor' },
        { number: '40+', label: 'Workforce', sublabel: 'Skilled laborers' },
        { number: '12+', label: 'Awards', sublabel: 'Industry recognition' },
        { number: '6+', label: 'Premium Brands', sublabel: 'Trusted partnerships' },
    ];

    return (
        <section className="stats">
            <div className="container">
                <div className="stats-header">
                    <span className="stats-label">Track Record</span>
                    <h2 className="stats-title">Proven excellence in <span className="stats-title-highlight">every project</span></h2>
                </div>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-content">
                                <h3 className="stat-heading">{stat.label}</h3>
                                <p className="stat-sublabel">{stat.sublabel}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;