import React from 'react';
import './Hero.css';

import heroBg from '/images/Herobg2.png';
import heroBgMobile from '/images/herobg-mobile.png';
import homeopathicImg from '/images/Homeopathic.png';
import allopathicImg from '/images/Allopathic.png';

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <picture>
                    <source media="(max-width: 600px)" srcSet={heroBgMobile} />
                    <img src={heroBg} alt="Hero Background" />
                </picture>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">Medical AI Solutions</h1>
                <p className="hero-subtitle">Revolutionizing Healthcare with AI</p>

                <div className="hero-split">
                    {/* Left: Homeopathic */}
                    <div className="hero-side hero-left">
                        <div className="hero-img-box">
                            <img src={homeopathicImg} alt="Homeopathic Medicine" className="hero-img hero-img-left" />
                        </div>
                        <div className="hero-label">
                            <h2 className="hero-label-title hero-label-green">Homeopathic AI</h2>
                            <p className="hero-label-desc">Natural Healing Intelligence</p>
                            <button className="hero-btn btn-green">Get Started</button>
                        </div>
                    </div>

                    {/* Center: Integrating text with circle */}
                    <div className="hero-center">
                        <div className="hero-center-circle"></div>
                        <p className="hero-center-text">
                            <span className="text-top">Integrating</span>
                            <span className="text-bottom">Nature &amp; Science</span>
                        </p>
                    </div>

                    {/* Right: Allopathic */}
                    <div className="hero-side hero-right">
                        <div className="hero-img-box">
                            <img src={allopathicImg} alt="Allopathic Medicine" className="hero-img hero-img-right" />
                        </div>
                        <div className="hero-label">
                            <h2 className="hero-label-title hero-label-blue">Allopathic AI</h2>
                            <p className="hero-label-desc">Advanced Medical Intelligence</p>
                            <button className="hero-btn btn-blue">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
