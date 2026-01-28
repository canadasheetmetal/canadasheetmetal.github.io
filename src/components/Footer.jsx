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
                            <p>📍 Address: Coming Soon</p>
                            <p>📞 Phone: Coming Soon</p>
                            <p>✉️ contact@canadasheetmetal.com</p>
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
