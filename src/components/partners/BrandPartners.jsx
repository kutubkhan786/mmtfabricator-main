import React from "react";
import "./Partners.css";

const BrandPartners = () => {
    const partnersData = [
        {
            category: "Aluminum Profiles",
            brands: ["Jindal", "Hindalco", "Maan", "Gujarat Aluminum"],
        },
        {
            category: "Glass",
            brands: ["Saint Gobain", "Asahi", "Modi"],
        },
        {
            category: "Locks & Handles",
            brands: ["King Lon", "Dhanuka", "Giesse", "Dorma", "Ozone", "Pego"],
        },
        {
            category: "Powder Coating",
            brands: ["Azonable", "Jotun", "Asian Paints"],
        },
        {
            category: "Glass Processor",
            brands: ["Sapphire Tuff", "Sejal", "Vtuff"],
        },
        {
            category: "Silicon & Fasteners",
            brands: ["Dowsil", "Wacker", "Hilti", "Rawl Plug"],
        },
    ];

    return (
        <section className="partners">
            <div className="partners-header">
                <span className="partners-label">Trusted Network</span>
                <h2 className="partners-title">
                    Premium <span>Brand Partnerships</span>
                </h2>
                <p className="partners-subtext">
                    We collaborate with industry-leading brands to ensure the highest
                    quality materials and finishes.
                </p>
            </div>

            <div className="partners-grid">
                {partnersData.map((item, index) => (
                    <div key={index} className="partner-card">
                        <h3>{item.category}</h3>
                        <ul>
                            {item.brands.map((brand, i) => (
                                <li key={i}>{brand}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default BrandPartners;