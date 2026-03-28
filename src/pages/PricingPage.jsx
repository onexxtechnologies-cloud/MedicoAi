import React, { useState } from 'react';
import './PricingPage.css';

const pricingData = [
    {
        name: 'Free',
        description: 'Basic Ayurvedic guidance for everyone.',
        price: 0,
        features: [
            '5 AI Analysis Prompts / Month',
            'Access to Medicine Keynotes',
            'Basic Clinical Guidance',
            'Analysis History'
        ]
    },
    {
        name: 'Basic',
        description: 'For practitioners starting their digital clinic.',
        price: 499,
        features: [
            '150 AI Analysis Prompts / Month',
            '1GB Patient Record Storage',
            'Clinical Success Tracking',
            'Export Records to CSV'
        ]
    },
    {
        name: 'Advance',
        description: 'Our most popular plan for busy professionals.',
        price: 799,
        recommended: true,
        features: [
            '200 AI Analysis Prompts / Month',
            '10GB Patient Record Storage',
            'Full Clinical History Management',
            'Priority AI Processing'
        ]
    },
    {
        name: 'Unlimited',
        description: 'Everything unlimited',
        price: 2999,
        features: [
            'Unlimited AI Analysis',
            'Unlimited Patient Records',
            'Enhanced Data Security',
            'Multi-User Account Access',
            'VVIP Support'
        ]
    }
];

function PricingPage() {
    const [theme, setTheme] = useState('homeo'); // 'homeo' or 'alo'
    const [showTerms, setShowTerms] = useState(false);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <div className={`pricing-container ${theme === 'homeo' ? 'homeo-theme' : 'alo-theme'}`}>
            <div className="theme-toggle-container">
                <div className="toggle-switch" onClick={() => toggleTheme(theme === 'homeo' ? 'alo' : 'homeo')}>
                    <div className="toggle-slider"></div>
                    <div className={`toggle-option ${theme === 'homeo' ? 'active' : ''}`}>HomeoAI</div>
                    <div className={`toggle-option ${theme === 'alo' ? 'active' : ''}`}>AloAI</div>
                </div>
            </div>

            <div className="pricing-grid">
                {pricingData.map((plan, index) => (
                    <div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                        {plan.recommended && <div className="recommended-badge">RECOMMENDED</div>}
                        
                        <h2 className="plan-name">{plan.name}</h2>
                        <p className="plan-description">{plan.description}</p>

                        <div className="price-box">
                            <div className="price-amount">
                                <span className="price-currency">₹</span>
                                {plan.price.toLocaleString()}
                            </div>
                            <div className="price-frequency">Frequency: Monthly</div>
                        </div>

                        <ul className="features-list">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="feature-item">
                                    <span className="check-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="terms-section">
                <button className="terms-btn" onClick={() => setShowTerms(!showTerms)}>
                    {showTerms ? 'Hide' : 'Show'} Terms and Conditions
                </button>
                
                {showTerms && (
                    <div className="terms-box">
                        <p>once buy cannot refund</p>
                        <p>to change pay method cancle plan and subscribe again</p>
                        <p>to upgrade same cancle the plan then buy upgraded</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PricingPage;
