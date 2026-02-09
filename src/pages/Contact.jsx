import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

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

// Icons
const LocationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

const EmailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formDataToSend = new FormData();
        formDataToSend.append("access_key", "9a8d2420-793e-4920-a18d-f383e09d0239");
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("company", formData.company);
        formDataToSend.append("message", formData.message);
        formDataToSend.append("subject", "New Contact Form Submission - Canada Sheet Metal");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: ''
                });
                // Reset status after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus(null), 5000);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            {/* Hero Section with Map Background */}
            <section className="contact-hero">
                <div className="map-background">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4!2d-79.38!3d43.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM5JzAwLjAiTiA3OcKwMjInNDguMCJX!5e0!3m2!1sen!2sca!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Canada Sheet Metal Location"
                    />
                    <div className="map-overlay"></div>
                </div>

                <div className="contact-hero-content">
                    <div className="container">
                        <div className="contact-grid">
                            {/* Left Side - Contact Info */}
                            <AnimatedSection className="contact-info">
                                <h1>Contact Us<span className="accent-dot">.</span></h1>
                                <p className="contact-subtitle">
                                    Ready to start your next project? Get in touch with our team.
                                </p>

                                <div className="info-blocks">
                                    <div className="info-block">
                                        <div className="info-icon">
                                            <LocationIcon />
                                        </div>
                                        <div className="info-content">
                                            <h4>Our Location</h4>
                                            <p>123 Industrial Avenue</p>
                                            <p>Toronto, Ontario</p>
                                            <p>M5V 2K7, Canada</p>
                                        </div>
                                    </div>

                                    <div className="info-block">
                                        <div className="info-icon">
                                            <EmailIcon />
                                        </div>
                                        <div className="info-content">
                                            <h4>Email Us</h4>
                                            <a href="mailto:orders@canadasheetmetal.com">orders@canadasheetmetal.com</a>
                                            <a href="mailto:inquiry@canadasheetmetal.com">inquiry@canadasheetmetal.com</a>
                                        </div>
                                    </div>

                                    <div className="info-block">
                                        <div className="info-icon">
                                            <PhoneIcon />
                                        </div>
                                        <div className="info-content">
                                            <h4>Call Us</h4>
                                            <a href="tel:+14165551234">+1 (416) 555-1234</a>
                                            <p className="muted">Toll Free: 1-800-555-1234</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Right Side - Contact Form */}
                            <AnimatedSection className="contact-form-wrapper" delay={200}>
                                <div className="form-card">
                                    <div className="form-corner top-left"></div>
                                    <div className="form-corner top-right"></div>
                                    <div className="form-corner bottom-left"></div>
                                    <div className="form-corner bottom-right"></div>

                                    <form onSubmit={handleSubmit} className="contact-form">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+1 (416) 555-0000"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="company">Company</label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="Your Company"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your project..."
                                                rows="4"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="spinner"></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>

                                        {submitStatus === 'success' && (
                                            <div className="success-message">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                                    <polyline points="22 4 12 14.01 9 11.01" />
                                                </svg>
                                                Thank you! Your message has been sent successfully.
                                            </div>
                                        )}

                                        {submitStatus === 'error' && (
                                            <div className="error-message">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <line x1="15" y1="9" x2="9" y2="15" />
                                                    <line x1="9" y1="9" x2="15" y2="15" />
                                                </svg>
                                                Something went wrong. Please try again or email us directly.
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
