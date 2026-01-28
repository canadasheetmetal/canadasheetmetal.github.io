import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Industries.css';

// Scroll animation hook
const useScrollAnimation = (threshold = 0.1) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
};

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`animate-section ${isVisible ? 'visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const Industries = () => {
    const industries = [
        {
            name: "Manufacturing & OEMs",
            icon: "🏭",
            description: "Custom components, assemblies, and production parts for original equipment manufacturers and manufacturing facilities."
        },
        {
            name: "HVAC & Mechanical Contractors",
            icon: "❄️",
            description: "Precision ductwork, housings, enclosures, and mechanical components for heating, ventilation, and air conditioning systems."
        },
        {
            name: "Construction & Infrastructure",
            icon: "🏗️",
            description: "Structural components, architectural metalwork, and custom fabrications for commercial and industrial construction projects."
        },
        {
            name: "Industrial Equipment Manufacturers",
            icon: "⚙️",
            description: "Machine guards, panels, enclosures, and custom housings for industrial machinery and equipment."
        },
        {
            name: "Automotive & Transportation",
            icon: "🚗",
            description: "Vehicle components, transport equipment parts, and specialized fabrications for the automotive and transportation sector."
        },
        {
            name: "Custom Metal Projects",
            icon: "✨",
            description: "Bespoke fabrication solutions for unique requirements, prototypes, and specialized applications across various industries."
        }
    ];

    return (
        <div className="industries-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <span className="tag">Who We Serve</span>
                    <h1>Industries We Serve</h1>
                    <p>Delivering precision sheet metal fabrication solutions across diverse sectors in Canada.</p>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="industries-section">
                <div className="container">
                    <AnimatedSection className="section-header">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Serving a Wide Range of Industries</h2>
                        <p>From manufacturing to construction, we provide reliable fabrication services tailored to each industry's unique requirements.</p>
                    </AnimatedSection>

                    <div className="industries-grid">
                        {industries.map((industry, index) => (
                            <AnimatedSection key={index} delay={index * 100}>
                                <div className="industry-card">
                                    <div className="industry-icon">{industry.icon}</div>
                                    <h3>{industry.name}</h3>
                                    <p>{industry.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="industries-cta">
                <div className="container">
                    <AnimatedSection>
                        <div className="cta-box">
                            <h2>Don't See Your Industry?</h2>
                            <p>We work with businesses of all types. Contact us to discuss your specific fabrication needs.</p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                                <Link to="/capabilities" className="btn btn-outline-light">View Our Capabilities</Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Industries;
