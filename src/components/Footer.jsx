import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-container">
                        <div className="footer-brand">
                            <h3>Canada Sheet Metal</h3>
                            <p>Precision sheet metal fabrication services for industrial, commercial, and manufacturing sectors across Canada. Quality craftsmanship, on-time delivery.</p>
                        </div>

                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/capabilities">Capabilities</Link></li>
                                <li><Link to="/industries">Industries</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/capabilities">CNC Laser Cutting</Link></li>
                                <li><Link to="/capabilities">Precision Bending</Link></li>
                                <li><Link to="/capabilities">Welding Services</Link></li>
                                <li><Link to="/capabilities">Custom Fabrication</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col footer-contact">
                            <h4>Contact</h4>
                            <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>6810 Kitimat Rd, Mississauga, ON, Canada, L5N 5M2</span>
                            </p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                <a href="mailto:inquiry@canadasheetmetal.com">inquiry@canadasheetmetal.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Canada Sheet Metal. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
