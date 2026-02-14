import React from "react";
import "./Clients.css";

const Clients = () => {
    const clients = [
        { logo: "/assets/logos/birla.png" },
        { logo: "/assets/logos/godrej.png" },
        { logo: "/assets/logos/jpinfra.png" },
        { logo: "/assets/logos/lodha.png" },//done
        { logo: "/assets/logos/mahindra.png" },//done
        { logo: "/assets/logos/rustomjee.png" },//done
        { logo: "/assets/logos/tata.png" },
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
