import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Capabilities.css';

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

// SVG Icons for machinery
const LaserIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M32 20V8" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M32 36L20 48M32 36L44 48" stroke="#C41E3A" strokeWidth="2" />
        <circle cx="32" cy="36" r="3" fill="#C41E3A" />
    </svg>
);

const PlasmaIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="8" width="24" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M32 40V56" stroke="#C41E3A" strokeWidth="3" />
        <circle cx="28" cy="52" r="2" fill="#FF6B35" />
        <circle cx="36" cy="54" r="1.5" fill="#FFD700" />
        <circle cx="32" cy="58" r="1" fill="#FF6B35" />
    </svg>
);

const PressIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 48L32 28L52 48" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="8" y="48" width="48" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M32 12V28" stroke="#C41E3A" strokeWidth="2" />
        <polygon points="28,12 32,4 36,12" fill="#C41E3A" />
    </svg>
);

const WeldIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 52L32 20L48 52" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="26" cy="16" r="2" fill="#C41E3A" />
        <circle cx="38" cy="12" r="1.5" fill="#C41E3A" />
        <circle cx="30" cy="8" r="1" fill="#C41E3A" />
        <rect x="28" y="18" width="8" height="4" rx="1" fill="currentColor" />
    </svg>
);

const Capabilities = () => {
    const services = [
        "Sheet metal cutting",
        "Precision bending and forming",
        "Welding and assembly",
        "Custom metal fabrication",
        "Short and long production runs"
    ];

    const machinery = [
        {
            name: "CNC Laser Cutting Machine",
            Icon: LaserIcon,
            specs: [
                "High-precision cutting for mild steel, stainless steel, and aluminum",
                "Thickness capability up to approx. 20 mm (material dependent)",
                "Ideal for complex profiles and tight tolerances"
            ]
        },
        {
            name: "CNC Plasma Cutting Machine",
            Icon: PlasmaIcon,
            specs: [
                "Suitable for thicker materials and heavy-duty applications",
                "Cost-effective cutting for structural and industrial components"
            ]
        },
        {
            name: "CNC Press Brake (14 ft)",
            Icon: PressIcon,
            specs: [
                "Precision bending and forming",
                "Capable of handling long and complex bends",
                "High repeatability and accuracy"
            ]
        },
        {
            name: "Welding Equipment",
            Icon: WeldIcon,
            specs: [
                "MIG Welding – For structural and production welding",
                "TIG Welding – For clean, precision welding on stainless steel and aluminum",
                "Spot Welding – For sheet metal assemblies"
            ]
        }
    ];

    const supportEquipment = [
        { name: "Shearing Machines", desc: "Precision cutting and sizing" },
        { name: "Drilling & Tapping Stations", desc: "Accurate hole placement" },
        { name: "Grinding & Finishing Equipment", desc: "Surface preparation and finishing" },
        { name: "Material Handling & Lifting", desc: "Safe and efficient material movement" },
        { name: "Assembly & Inspection Workstations", desc: "Quality control and final assembly" }
    ];

    return (
        <div className="capabilities-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <span className="tag">Our Equipment</span>
                    <h1>Capacity & Capabilities</h1>
                    <p>Advanced machinery and skilled craftsmanship for mid to large-scale fabrication projects.</p>
                </div>
            </section>

            {/* Capabilities Overview */}
            <section className="capabilities-overview">
                <div className="container">
                    <div className="overview-grid">
                        <AnimatedSection className="overview-content">
                            <span className="section-tag">What We Can Do</span>
                            <h2>Capabilities Overview</h2>
                            <p className="lead">
                                Canada Sheet Metal has the capability to handle mid to large-scale fabrication projects,
                                from prototype development to full production runs.
                            </p>
                            <p>Our services include:</p>

                            <div className="services-checklist">
                                {services.map((service, i) => (
                                    <div className="service-check-item" key={i}>
                                        <span className="check-icon">✓</span>
                                        <span>{service}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '32px' }}>
                                Request a Quote
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection className="overview-illustration" delay={200}>
                            <img src="/images/press-brake.webp" alt="CNC Press Brake Operation" className="rounded-image shadow-lg" loading="lazy" />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Machinery Section */}
            <section className="machinery-section">
                <div className="container">
                    <AnimatedSection className="section-header">
                        <span className="section-tag">Our Equipment</span>
                        <h2>Machinery & Equipment</h2>
                        <p>Industry-leading equipment with realistic technical capabilities for precision manufacturing.</p>
                    </AnimatedSection>

                    <div className="machinery-grid">
                        {machinery.map((machine, index) => (
                            <AnimatedSection key={index} delay={index * 100}>
                                <div className="machine-card">
                                    <div className="machine-header">
                                        <div className="machine-icon-wrapper">
                                            <machine.Icon />
                                        </div>
                                        <div className="machine-number">{String(index + 1).padStart(2, '0')}</div>
                                    </div>
                                    <h3>{machine.name}</h3>
                                    <ul className="machine-specs">
                                        {machine.specs.map((spec, i) => (
                                            <li key={i}>
                                                <span className="spec-bullet">•</span>
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supporting Equipment */}
            <section className="support-section">
                <div className="container">
                    <AnimatedSection className="section-header">
                        <span className="section-tag">Additional Resources</span>
                        <h2>Additional Supporting Equipment</h2>
                        <p>All equipment supports high-quality fabrication, accuracy, and consistent output.</p>
                    </AnimatedSection>

                    <div className="support-grid">
                        {supportEquipment.map((item, index) => (
                            <AnimatedSection key={index} delay={index * 80}>
                                <div className="support-card">
                                    <h4>{item.name}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="capabilities-cta">
                <div className="container">
                    <AnimatedSection>
                        <div className="cta-box">
                            <h2>Ready to Discuss Your Project?</h2>
                            <p>Contact us to learn how our capabilities can support your fabrication needs.</p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
                                <Link to="/industries" className="btn btn-outline-light">Industries We Serve</Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Capabilities;
