import React, { useEffect, useRef } from 'react';
import './StepGuide.css';
import personalizedMedicineIcon from '../../personalized-medicine.png';

const steps = [
    {
        num: '1',
        title: 'Consultation',
        desc: 'Discuss Your Health',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="18" y="10" width="28" height="38" rx="3" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
                <rect x="22" y="6" width="20" height="8" rx="2" fill="#22c55e" />
                <path d="M24 22h16M24 30h16M24 38h10" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
                <circle cx="46" cy="46" r="9" fill="#22c55e" />
                <path d="M42 46l3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        num: '2',
        title: 'AI Analysis',
        desc: 'Receive Insights',
        icon: (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Magnifying Glass Circle */}
                <circle cx="45" cy="45" r="38" stroke="url(#step2_grad)" strokeWidth="6" />
                {/* Magnifying Glass Handle */}
                <path d="M72 72l22 22" stroke="url(#step2_grad)" strokeWidth="10" strokeLinecap="round" />
                {/* Microchip Body */}
                <rect x="30" y="30" width="30" height="30" rx="4" stroke="url(#step2_grad)" strokeWidth="4" />
                <rect x="38" y="38" width="14" height="14" rx="2" stroke="url(#step2_grad)" strokeWidth="2.5" />
                {/* Microchip Pins */}
                <path d="M38 22v8M52 22v8M38 60v8M52 60v8M22 38h8M22 52h8M60 38h8M60 52h8" stroke="url(#step2_grad)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                    <linearGradient id="step2_grad" x1="20" y1="10" x2="90" y2="80" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00d2ff" />
                        <stop offset="1" stopColor="#3a7bd5" />
                    </linearGradient>
                </defs>
            </svg>
        ),
    },
    {
        num: '3',
        title: 'Personalized Treatment',
        desc: 'Get a Tailored Plan',
        icon: <img src={personalizedMedicineIcon} alt="Personalized Treatment" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
    },
    {
        num: '4',
        title: 'Monitor Progress',
        desc: 'Track & Optimize',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="14" width="44" height="32" rx="4" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2" />
                <rect x="14" y="18" width="36" height="24" rx="2" fill="#ffffff" stroke="#dbeafe" strokeWidth="1" />
                <path d="M24 46l-4 6h16l-4-6" fill="#3b82f6" opacity="0.2" />
                <circle cx="50" cy="18" r="8" fill="#ef4444" />
                <path d="M47 18l6 0M50 15l0 6" stroke="white" strokeWidth="2" strokeLinecap="round" transform="rotate(45 50 18)" />
            </svg>
        ),
    },
];

const ArrowSvg = () => (
    <svg viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12h32M28 6l6 6-6 6" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function StepGuide() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        cardsRef.current.forEach(el => { if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    return (
        <section className="step-guide" id="step-guide">
            <h2 className="section-title">Step by Step Guide</h2>
            <div className="steps-row">
                {steps.map((step, i) => (
                    <React.Fragment key={i}>
                        <div className="step-card reveal" ref={el => cardsRef.current[i] = el}>
                            <div className="step-number"><span>{step.num}</span></div>
                            <h3 className="step-title">{step.title}</h3>
                            <div className="step-icon">{step.icon}</div>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                        {i < steps.length - 1 && (
                            <div className="step-arrow">
                                <ArrowSvg />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default StepGuide;
