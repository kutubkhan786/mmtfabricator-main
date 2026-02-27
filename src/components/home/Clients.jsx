import React from "react";
import "./Clients.css";

const Clients = () => {
    const clients = [
        { logo: "/assets/images/clients/birla.png" },
        { logo: "/assets/images/clients/godrej.png" },
        { logo: "/assets/images/clients/jpinfra.png" },
        { logo: "/assets/images/clients/lodha.png" },
        { logo: "/assets/images/clients/mahindra.png" },
        { logo: "/assets/images/clients/rustomjee.png" },
        { logo: "/assets/images/clients/tata.png" },
        { logo: "/assets/images/clients/piramal.png" },
        { logo: "/assets/images/clients/adani.png" },
        { logo: "/assets/images/clients/landt.png" },
    ];

    return (
        <section className="clients">
            <div className="container">
                <div className="clients-header">
                    <span className="clients-label">Trusted By</span>
                    <h2 className="clients-title">Industry Leaders</h2>
                </div>

                <div className="marquee">
                    <div className="marquee-track">
                        {[...clients, ...clients].map((client, index) => (
                            <div key={index} className="client-item">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="client-logo"
                                />

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
