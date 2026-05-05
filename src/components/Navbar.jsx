import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { LogoIcon } from './icons/LogoIcon';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

function Navbar() {
    return (
        <div className="navbar-wrapper top-[30px] left-0 right-0 z-20 fixed flex justify-center">
            <nav className="navbar">
                {/* Logo */}
                <Link to="/" className="logo">
                    <LogoIcon height={24} />
                </Link>

                {/* Links */}
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                        <span data-text="Home">Home</span>
                    </Link>
                    <Link to="/about" className="nav-link">
                        <span data-text="About">About</span>
                    </Link>
                    <a href="#" className="nav-link">
                        <span data-text="Page">Page</span>
                        <ChevronDownIcon size={14} />
                    </a>
                    <Link to="/blog" className="nav-link">
                        <span data-text="Blog">Blog</span>
                    </Link>
                </div>

                {/* CTA Button */}
                <Link to="/contact">
                    <button className="cta-button px-[20px] py-[12px] rounded-[100px]">
                        <span className="dot !bg-white"></span>
                        Let's Talk
                    </button>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;