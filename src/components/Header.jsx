import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = () => {
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo" onClick={handleNavClick}>
                    <img src={logo} alt="Canada Sheet Metal - CSM" />
                </Link>

                <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>About Us</NavLink></li>
                        <li><NavLink to="/capabilities" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Capabilities</NavLink></li>
                        <li><NavLink to="/industries" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>Industries</NavLink></li>
                    </ul>
                </nav>

                <Link to="/contact" className="btn btn-primary header-cta" onClick={handleNavClick}>
                    Request Quote
                </Link>

                <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
