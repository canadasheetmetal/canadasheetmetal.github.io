import React, { useEffect, useRef, useState } from 'react';
import './About.css';

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

// SVG Icons for values
const VisionIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="32" r="4" fill="#C41E3A" />
        <path d="M32 8V16M32 48V56M8 32H16M48 32H56" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const MissionIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8L40 24H56L44 36L48 52L32 44L16 52L20 36L8 24H24L32 8Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="32" cy="32" r="6" fill="#C41E3A" />
    </svg>
);

const GoalIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 52L32 20L48 52" stroke="currentColor" strokeWidth="2" />
        <path d="M20 44H44" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="16" r="4" fill="#C41E3A" />
        <path d="M32 20V32" stroke="#C41E3A" strokeWidth="2" />
    </svg>
);

const About = () => {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <span className="tag">About Us</span>
                    <h1>Building Trust Through Precision</h1>
                    <p>A Canadian-based fabrication company delivering quality and innovation.</p>
                </div>
            </section>

            {/* About Intro */}
            <section className="about-intro">
                <div className="container">
                    <div className="intro-grid">
                        <AnimatedSection className="intro-content">
                            <h2>Who We Are</h2>
                            <p className="lead">
                                Canada Sheet Metal is a Canadian-based sheet metal fabrication company specializing
                                in precision manufacturing, custom metal components, and high-quality fabricated assemblies.
                            </p>
                            <p>
                                We support a wide range of industries including manufacturing, HVAC, construction,
                                and industrial equipment.
                            </p>
                            <p>
                                Our focus is on delivering accurate, durable, and cost-effective sheet metal solutions
                                while maintaining high standards of quality, safety, and customer service. We work closely
                                with our customers from concept to completion to ensure every project meets exact specifications.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection className="intro-illustration" delay={200}>
                            <img src="/images/shop-floor.webp" alt="Our Fabrication Facility" className="rounded-image shadow-lg" loading="lazy" />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Goal */}
            <section className="values-section">
                <div className="container">
                    <AnimatedSection className="section-header">
                        <span className="section-tag">Our Foundation</span>
                        <h2>Vision, Mission & Goal</h2>
                    </AnimatedSection>

                    <div className="values-grid">
                        <AnimatedSection delay={100}>
                            <div className="value-card">
                                <div className="value-icon">
                                    <VisionIcon />
                                </div>
                                <h3>Vision</h3>
                                <p>
                                    To become a trusted Canadian leader in sheet metal fabrication by delivering
                                    precision-built solutions that support the growth of manufacturing and
                                    industrial innovation across Canada.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="value-card featured">
                                <div className="value-icon">
                                    <MissionIcon />
                                </div>
                                <h3>Mission</h3>
                                <p>
                                    Our mission is to provide reliable, high-quality sheet metal fabrication services
                                    using advanced machinery, skilled craftsmanship, and a customer-first approach—ensuring
                                    every project is delivered with accuracy, consistency, and integrity.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={300}>
                            <div className="value-card">
                                <div className="value-icon">
                                    <GoalIcon />
                                </div>
                                <h3>Company Goal</h3>
                                <p>
                                    To build long-term partnerships with customers by offering dependable
                                    fabrication services, continuous improvement, and on-time delivery for
                                    small, medium, and large-scale projects.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-us">
                <div className="container">
                    <AnimatedSection className="section-header">
                        <span className="section-tag">Why Canada Sheet Metal</span>
                        <h2>What Sets Us Apart</h2>
                    </AnimatedSection>

                    <div className="why-us-grid">
                        <AnimatedSection delay={100}>
                            <div className="why-item">
                                <span className="why-number">01</span>
                                <h4>Precision Manufacturing</h4>
                                <p>State-of-the-art CNC equipment for accurate, repeatable results.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={150}>
                            <div className="why-item">
                                <span className="why-number">02</span>
                                <h4>Quality Assurance</h4>
                                <p>Rigorous inspection processes at every production stage.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <div className="why-item">
                                <span className="why-number">03</span>
                                <h4>On-Time Delivery</h4>
                                <p>Reliable timelines with efficient project management.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={250}>
                            <div className="why-item">
                                <span className="why-number">04</span>
                                <h4>Customer Focus</h4>
                                <p>Collaborative approach from concept to completion.</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
