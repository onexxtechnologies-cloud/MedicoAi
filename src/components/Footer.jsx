import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollTo } from '../hooks/useScrollTo';
import './Footer.css';

import footerBg from '/images/file_000000002b3872069128d1e4689b8464.png';

function Footer() {
    const colsRef = useRef([]);
    const scrollTo = useScrollTo();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.15 });

        colsRef.current.forEach(el => { if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    const columns = [
        { title: 'About', links: [['Our Mission', '#hero'], ['Our Team', '#hero']] },
        { title: 'Services', links: [['Homeopathic AI', '#hero'], ['Allopathic AI', '#hero']] },
        { title: 'Resources', links: [['Blog', '#blogs'], ['FAQs', '#faq']] },
        { title: 'Links', links: [['Contact', '#contact']] },
    ];

    return (
        <footer className="footer" id="contact">
            <div className="footer-bg">
                <img src={footerBg} alt="Footer Background" />
            </div>
            <div className="footer-content">
                <div className="footer-brand reveal" ref={el => colsRef.current[5] = el}>
                    <img src="/logo2.png" alt="Medico AI Logo" className="footer-logo" />
                    <div className="footer-brand-text">
                        <span className="footer-brand-name">MEDICO AI</span><br />
                        <span className="footer-brand-tagline">HOMEOPATHIC & ALLOPATHIC AI SOLUTIONS</span>
                    </div>
                </div>
                <div className="footer-columns">
                    {columns.map((col, i) => (
                        <div className="footer-col reveal" key={i} ref={el => colsRef.current[i] = el}>
                            <h4 className="footer-col-title">{col.title}</h4>
                            <ul>
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        <a href={link[1]} onClick={(e) => scrollTo(e, link[1].slice(1))}>
                                            {link[0]}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact column */}
                    <div className="footer-col reveal" ref={el => colsRef.current[4] = el}>
                        <h4 className="footer-col-title">Contact</h4>
                        <ul>
                            <li><a href="#">Get in Touch</a></li>
                        </ul>
                        <div className="social-icons">
                            <a href="#" className="social-icon" aria-label="Twitter">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.32 3.91A12.16 12.16 0 0 1 3.03 4.9a4.28 4.28 0 0 0 1.32 5.72 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.27 4.27 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.59 8.59 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 22.46 6z" /></svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="YouTube">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.8 8.001a2.749 2.749 0 0 0-1.935-1.946C18.265 5.5 12 5.5 12 5.5s-6.264 0-7.865.555A2.749 2.749 0 0 0 2.2 8.001 28.87 28.87 0 0 0 1.75 12a28.87 28.87 0 0 0 .45 3.999 2.749 2.749 0 0 0 1.935 1.946C5.736 18.5 12 18.5 12 18.5s6.264 0 7.865-.555a2.749 2.749 0 0 0 1.935-1.946A28.87 28.87 0 0 0 22.25 12a28.87 28.87 0 0 0-.45-3.999zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.614 20.452H4.06V9h2.554v11.452z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} MEDICO AI. All rights reserved.</p>
                </div>
            </div>

            {/* Realistic stethoscope decoration */}
            <div className="footer-stethoscope-img">
                <img src="/stethoscope-footer3.png" alt="Stethoscope decoration" />
            </div>
        </footer>
    );
}

export default Footer;
