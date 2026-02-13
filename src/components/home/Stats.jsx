import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";

const AnimatedNumber = ({ value }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    const duration = 3000;
                    const startTime = performance.now();
                    const target = parseInt(value.replace(/\D/g, ""));

                    const animate = (currentTime) => {
                        const progress = Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );

                        setCount(Math.floor(progress * target));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [value]);

    return (
        <span ref={ref} className="crime-number">
            {count}
            {value.includes("+") && "+"}
            {value.includes("K") && "K"}
        </span>
    );
};

const Stats = () => {
    const stats = [
        { number: "200+", label: "Projects Completed" },
        { number: "30+", label: "Ongoing Projects" },
        { number: "20K", label: "Sq.ft Facility" },
        { number: "12+", label: "Industry Awards" },
    ];

    return (
        <section className="crime-stats-section">
            <div className="crime-strip">
                <div className="bolt bolt-1"></div>
                <div className="bolt bolt-2"></div>
                <div className="bolt bolt-3"></div>
                <div className="bolt bolt-4"></div>

                <div className="crime-content">
                    {stats.map((stat, index) => (
                        <div className="crime-stat-item" key={index}>
                            <AnimatedNumber value={stat.number} />
                            <span className="crime-label">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
