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
                <Link to="/" className="nav-logo">
                    MMT FABRICATORS
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