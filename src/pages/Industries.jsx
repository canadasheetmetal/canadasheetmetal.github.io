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

// SVG Icons for each industry
const ManufacturingIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
);

const HVACIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <path d="M2 12h20M12 2v20" />
        <path d="M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
    </svg>
);

const ConstructionIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <path d="M3 21h18M9 21V7l7-4v18" />
        <path d="M12 21V11h5v10" />
    </svg>
);

const IndustrialIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
);

const AutomotiveIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
);

const CustomIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const Industries = () => {
    const industries = [
        {
            name: "Manufacturing & OEMs",
            Icon: ManufacturingIcon,
            description: "Custom components, assemblies, and production parts for original equipment manufacturers and manufacturing facilities."
        },
        {
            name: "HVAC & Mechanical Contractors",
            Icon: HVACIcon,
            description: "Precision ductwork, housings, enclosures, and mechanical components for heating, ventilation, and air conditioning systems."
        },
        {
            name: "Construction & Infrastructure",
            Icon: ConstructionIcon,
            description: "Structural components, architectural metalwork, and custom fabrications for commercial and industrial construction projects."
        },
        {
            name: "Industrial Equipment Manufacturers",
            Icon: IndustrialIcon,
            description: "Machine guards, panels, enclosures, and custom housings for industrial machinery and equipment."
        },
        {
            name: "Automotive & Transportation",
            Icon: AutomotiveIcon,
            description: "Vehicle components, transport equipment parts, and specialized fabrications for the automotive and transportation sector."
        },
        {
            name: "Custom Metal Projects",
            Icon: CustomIcon,
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
                                    <div className="industry-icon"><industry.Icon /></div>
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
