import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Simple scroll animation hook
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

// Animated Section Wrapper
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

const Home = () => {
    const highlights = [
        {
            image: "/images/laser-cutting.webp",
            title: "CNC Laser Cutting",
            desc: "High-precision cutting for complex profiles with tight tolerances."
        },
        {
            image: "/images/press-brake.webp",
            title: "Precision Bending",
            desc: "Advanced CNC press brakes for accurate, repeatable bends."
        },
        {
            image: "/images/welding.webp",
            title: "Welding & Assembly",
            desc: "Expert MIG, TIG, and Spot welding for structural applications."
        },
        {
            image: "/images/finished-parts.webp",
            title: "Quality Finishing",
            desc: "Clean edges and premium finishing for final production parts."
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/images/hero-bg.webp"
                    >
                        <source src="/images/Metal_Fabrication_Video_Generation.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay"></div>
                </div>

                <div className="container hero-content">
                    <span className="hero-tag animate-hero-tag">Canadian Excellence in Metal Fabrication</span>
                    <h1 className="animate-hero-title">Precision Sheet Metal<br />Fabrication</h1>
                    <p className="animate-hero-text">
                        Canada Sheet Metal is your trusted partner for high-quality sheet metal fabrication.
                        We serve industrial, commercial, HVAC, and manufacturing sectors across Canada with
                        precision, reliability, and expert craftsmanship.
                    </p>

                    <div className="hero-buttons animate-hero-buttons">
                        <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
                        <Link to="/contact" className="btn btn-outline-light">Contact Us</Link>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <span>↓</span>
                </div>
            </section>

            {/* Quick Highlights Section */}
            <section className="highlights">
                <div className="container">
                    <AnimatedSection className="section-header">
                        <span className="section-tag">What We Do</span>
                        <h2>Complete Sheet Metal Solutions</h2>
                        <p>From concept to completion, we deliver precision fabrication services tailored to your needs.</p>
                    </AnimatedSection>

                    <div className="highlights-grid">
                        {highlights.map((item, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="highlight-card image-card">
                                    <div className="highlight-image">
                                        <img src={item.image} alt={item.title} loading="lazy" />
                                    </div>
                                    <div className="highlight-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <Link to="/capabilities" className="highlight-link">Learn More →</Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Intro Section */}
            <section className="about-intro-section">
                <div className="container">
                    <div className="about-intro-grid">
                        <AnimatedSection className="about-intro-content">
                            <span className="section-tag">About Us</span>
                            <h2>Your Trusted Canadian Fabrication Partner</h2>
                            <p className="lead">
                                Canada Sheet Metal is a Canadian-based sheet metal fabrication company specializing
                                in precision manufacturing, custom metal components, and high-quality fabricated assemblies.
                            </p>
                            <p>
                                We support a wide range of industries including manufacturing, HVAC, construction,
                                and industrial equipment. Our focus is on delivering accurate, durable, and
                                cost-effective sheet metal solutions while maintaining high standards of quality,
                                safety, and customer service.
                            </p>
                            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
                        </AnimatedSection>

                        <AnimatedSection className="about-intro-illustration" delay={200}>
                            <img src="/images/shop-floor.webp" alt="Clean Shop Floor" className="rounded-image shadow-lg" loading="lazy" />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Capabilities Preview */}
            <section className="capabilities-preview">
                <div className="container">
                    <div className="capabilities-layout">
                        <AnimatedSection className="capabilities-illustration">
                            <img src="/images/laser-cutting.webp" alt="Laser Cutting" className="rounded-image shadow-lg" loading="lazy" />
                        </AnimatedSection>

                        <AnimatedSection className="capabilities-text" delay={200}>
                            <span className="section-tag">Why Choose Us</span>
                            <h2>Advanced Equipment & Skilled Craftsmanship</h2>
                            <p>We combine state-of-the-art machinery with experienced professionals to deliver exceptional results.</p>

                            <div className="capability-items">
                                <div className="capability-item">
                                    <div className="capability-check">✓</div>
                                    <div>
                                        <strong>CNC Laser Cutting</strong>
                                        <p>Precision cutting up to 20mm with tight tolerances.</p>
                                    </div>
                                </div>
                                <div className="capability-item">
                                    <div className="capability-check">✓</div>
                                    <div>
                                        <strong>14ft CNC Press Brake</strong>
                                        <p>Capable of complex, long bends with high accuracy.</p>
                                    </div>
                                </div>
                                <div className="capability-item">
                                    <div className="capability-check">✓</div>
                                    <div>
                                        <strong>MIG, TIG & Spot Welding</strong>
                                        <p>Complete welding services for all applications.</p>
                                    </div>
                                </div>
                            </div>

                            <Link to="/capabilities" className="btn btn-outline" style={{ marginTop: '24px' }}>View All Capabilities</Link>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="industries-preview">
                <div className="container">
                    <AnimatedSection className="section-header">
                        <span className="section-tag">Industries We Serve</span>
                        <h2>Ready to Support Your Sector</h2>
                        <p>From HVAC to manufacturing, we provide precision fabrication for diverse industries.</p>
                    </AnimatedSection>

                    <div className="industries-strip">
                        {['Manufacturing & OEMs', 'HVAC & Mechanical', 'Construction', 'Industrial Equipment', 'Automotive', 'Custom Projects'].map((industry, i) => (
                            <AnimatedSection key={i} delay={i * 80}>
                                <div className="industry-pill">{industry}</div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection delay={400}>
                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <Link to="/industries" className="btn btn-primary">Explore Industries</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <AnimatedSection>
                        <div className="cta-box">
                            <h2>Ready to Start Your Project?</h2>
                            <p>Get in touch with our fabrication experts for a free consultation and quote.</p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn btn-primary btn-glow">Request a Quote</Link>
                                <Link to="/contact" className="btn btn-outline-light">Contact Us</Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Home;
