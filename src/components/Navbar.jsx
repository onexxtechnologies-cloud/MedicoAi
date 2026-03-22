import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useScrollTo } from '../hooks/useScrollTo';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const scrollTo = useScrollTo();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            if (location.pathname === '/') {
                const sections = ['hero', 'why-choose-us', 'step-guide', 'blogs', 'faq'];
                let found = false;
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 150 && rect.bottom >= 150) {
                            setActiveSection(section);
                            found = true;
                            break;
                        }
                    }
                }
                if (!found && window.scrollY < 100) setActiveSection('hero');
            } else {
                setActiveSection(null);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    const handleNavClick = (e, id) => {
        setIsMenuOpen(false);
        scrollTo(e, id);
    };

    // Handle scroll after navigation to Home
    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollTo) {
            const id = location.state.scrollTo;
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = el.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 100);
            // Clear state so it doesn't scroll again on refresh
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
                <div className="nav-inner">
                    {/* Hamburger — only visible on mobile */}
                    <button className="nav-toggle" onClick={() => setIsMenuOpen(true)} aria-label="Open Navigation">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                    <a href="#hero" className="nav-brand" onClick={(e) => scrollTo(e, 'hero')}>
                        <img src="/logo2.png" alt="Medico AI Logo" className="nav-logo" />
                        <div className="brand-text">
                            <span className="brand-name">MEDICO AI</span>
                            <span className="brand-tagline">HOMEOPATHIC & ALLOPATHIC AI SOLUTIONS</span>
                        </div>
                    </a>

                    {/* Links — inline on desktop */}
                    <div className="nav-links desktop-only">
                        <a href="#hero"
                            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                            onClick={(e) => scrollTo(e, 'hero')}>Home</a>
                        <Link to="/features"
                            className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}>Features</Link>
                        <Link to="/how-to-use"
                            className={`nav-link ${location.pathname === '/how-to-use' ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}>How to Use</Link>
                        <Link to="/blogs"
                            className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                        <a href="#faq"
                            className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
                            onClick={(e) => scrollTo(e, 'faq')}>FAQ</a>
                    </div>

                    <Link to="/contact" 
                        className="nav-cta" 
                        onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </div>
            </nav>

            {/* Dark overlay behind sidebar */}
            <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>

            {/* Mobile Sidebar - Placed OUTSIDE the backdrop-filter to prevent fixed clipping */}
            <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-sidebar-header">
                    <button className="mobile-close-btn" onClick={() => setIsMenuOpen(false)} aria-label="Close Navigation">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="mobile-sidebar-links">
                    <a href="#hero" className={`mobile-nav-link ${activeSection === 'hero' ? 'active' : ''}`} onClick={(e) => scrollTo(e, 'hero')}>Home</a>
                    <Link to="/features" className={`mobile-nav-link ${location.pathname === '/features' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Features</Link>
                    <Link to="/how-to-use" className={`mobile-nav-link ${location.pathname === '/how-to-use' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>How to Use</Link>
                    <Link to="/blogs" className={`mobile-nav-link ${location.pathname === '/blogs' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                    <a href="#faq" className={`mobile-nav-link ${activeSection === 'faq' ? 'active' : ''}`} onClick={(e) => scrollTo(e, 'faq')}>FAQ</a>
                    <Link to="/contact" 
                        className="mobile-nav-cta" 
                        onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
