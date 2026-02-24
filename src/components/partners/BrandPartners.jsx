import React from "react";
import "./Partners.css";

const BrandPartners = () => {
    const partnerCategories = [
        {
            category: "Aluminum Profiles",
            brands: ["Jindal", "Hindalco", "Maan", "Gujarat Aluminum"]
        },
        {
            category: "Glass",
            brands: ["Saint Gobain", "Asahi", "Modi"]
        },
        {
            category: "Locks & Handles",
            brands: ["King Lon", "Dhanuka", "Giesse", "Dorma", "Ozone", "Pego"]
        },
        {
            category: "Powder Coating",
            brands: ["Azonable", "Jotun", "Asian Paints"]
        },
        {
            category: "Glass Processor",
            brands: ["Sapphire Tuff", "Sejal", "Vtuff"]
        },
        {
            category: "Silicon & Fasteners",
            brands: ["Dowsil", "Wacker", "Hilti", "Rawl Plug"]
        }
    ];

    return (
        <section className="brand-partners">
            <div className="partners-container">
                {/* LEFT CONTENT */}
                <div className="partners-left">
                    <span className="section-tag">Trusted By Industry Leaders</span>
                    <h2>
                        Premium <span>Brand Partnerships</span>
                    </h2>
                    <p className="partners-description">
                        Collaborating with world-class manufacturers to deliver exceptional quality and innovation
                    </p>
                    <div className="stats-container">
                        <div className="stat-item">
                            <span className="stat-number">25+</span>
                            <span className="stat-label">Premium Brands</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years Excellence</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="partners-right">
                    {partnerCategories.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="partner-block">
                                <h3>{item.category}</h3>
                                <div className="brand-tags">
                                    {item.brands.map((brand, idx) => (
                                        <span key={idx} className="brand-tag">{brand}</span>
                                    ))}
                                </div>
                            </div>
                            {index < partnerCategories.length - 1 && <div className="divider"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandPartners;