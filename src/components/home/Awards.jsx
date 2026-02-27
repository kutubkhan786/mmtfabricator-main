import React from 'react';
import './Awards.css';

const Awards = () => {
    const awards = [
        {
            title: 'Best Safety of the Year',
            issuer: 'Lodha Developers',
            image: '/assets/images/awards/lodhaBS.jpeg'
        },
        {
            title: 'Best Quality Performer - 2025',
            issuer: 'Lodha Developers',
            image: '/assets/images/awards/lodhaBQ.jpeg'
        },
        {
            title: 'Customer Delight Award',
            issuer: 'Godrej Properties',
            image: '/assets/images/awards/godrej.jpeg'
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
                            <div className="award-image-container">
                                <img
                                    src={award.image}
                                    alt={`${award.title} award`}
                                    className="award-image"
                                />
                            </div>
                            <div className="award-content">
                                <h3 className="award-title">{award.title}</h3>
                                <p className="award-issuer">{award.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;