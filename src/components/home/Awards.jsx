import React from 'react';
import './Awards.css';

const Awards = () => {
    const awards = [
        {
            title: 'Best Safety of the Year',
            issuer: 'Lodha Developers',

        },
        {
            title: 'Best Quality Performer - 2025',
            issuer: 'Lodha Developers',

        },
        {
            title: 'Customer Delight Award',
            issuer: 'Godrej Properties',

        },
    ];

    return (
        <section className="awards">
            <div className="container">
                <div className="awards-header">
                    <span className="awards-label">Recognition</span>
                    <h2 className="awards-title">Award-Winning Excellence</h2>
                </div>
                <div className="awards-grid">
                    {awards.map((award, index) => (
                        <div key={index} className="award-card">
                            <div className="award-number">0{index + 1}</div>
                            <div className="award-content">
                                <h3 className="award-title">{award.title}</h3>
                                <p className="award-issuer">{award.issuer}</p>
                                <span className="award-year">{award.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;