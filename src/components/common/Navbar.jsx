import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Services', path: '/services' },
        { title: 'Partners', path: '/partners' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="nav-container container">
                <Link to="/" className="nav-logo" style={{ display: "flex", flexDirection: "column", gap:"0" }}>
                    <svg width="48" height="48" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="400" fill="none" />
                        <g fill="none" stroke="black" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter">
                            <line x1="200" y1="60" x2="200" y2="340" />
                            <path d="M 80,340 V 130 L 200,250 L 320,130 V 340" />
                            <path d="M 140,340 V 100 L 200,160 L 260,100 V 340" />
                        </g>
                    </svg>
                    <span className="logo-text">MMT FABRICATORS</span>
                </Link>

                <div className="nav-menu-container">
                    <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.path} className="nav-item">
                                <Link to={item.path} className="nav-link" onClick={() => setIsOpen(false)}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;