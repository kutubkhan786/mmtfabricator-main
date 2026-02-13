import React from 'react';
import './Stats.css';

const Stats = () => {
    const stats = [
        { number: '200+', label: 'Projects Completed', sublabel: 'In last 15+ years' },
        { number: '30+', label: 'Ongoing Projects', sublabel: 'Currently in execution' },
        { number: '20k', label: 'Sq.ft Facility', sublabel: 'Ground + 1 floor' },
        { number: '12+', label: 'Awards', sublabel: 'Industry recognition' },
    ];

    return (
        <section className="stats">
            {/* Stats Strip */}
            <div className="stats">
                {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                        <div className="stat-item">
                            <span className="stat-value">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                            {stat.sublabel && <span className="stat-sublabel">{stat.sublabel}</span>}
                        </div>
                        {index < stats.length - 1 && <div className="stat-divider"></div>}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Stats;