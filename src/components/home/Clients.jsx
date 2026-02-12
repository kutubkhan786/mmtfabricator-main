import React from 'react';
import './Clients.css';

const Clients = () => {
    const clients = [
        'Lodha Developers',
        'Godrej Properties',
        'Mahindra Lifespace',
        'Tata Realty',
        'Kalpataru Limited',
        'Birla Estate',
    ];

    return (
        <section className="clients">
            <div className="container">
                <div className="clients-header">
                    <span className="clients-label">Trusted By</span>
                    <h2 className="clients-title">Industry Leaders</h2>
                </div>
                <div className="clients-grid">
                    {clients.map((client, index) => (
                        <div key={index} className="client-item">
                            <span>{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;