import React, { useState } from 'react';
import './PatientAnalysis.css';

const PatientAnalysis = () => {
    const [inputValue, setInputValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setIsSearching(true);
        // Simulate search without showing cards
        setTimeout(() => setIsSearching(false), 2000);
    };

    return (
        <section className="patient-analysis-section" id="patient-analysis">
            <div className="analysis-container">
                {/* Left Side: Minimal Search Bar Only */}
                <div className="left-column">
                    <form className="search-wrapper" onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="search-input"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Describe patient symptoms..."
                        />

                        <button type="submit" className="search-button" disabled={isSearching}>
                            {isSearching ? (
                                <div className="loading-spinner"></div>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            )}
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        AI can be wrong, please always double check report
                    </div>

                    <div className="how-to-use-list">
                        <div className="how-to-step">
                            <div className="step-number">1</div>
                            <div className="step-text">Our AI parses patient history into clinical rubrics.</div>
                        </div>
                        <div className="how-to-step">
                            <div className="step-number">2</div>
                            <div className="step-text">Remedy matching identifies top candidates with percentage accuracy.</div>
                        </div>
                        <div className="how-to-step">
                            <div className="step-number">3</div>
                            <div className="step-text">Review the comprehensive mapping for integrated treatment planning.</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Description (Restored) */}
                <div className="right-column">
                    <span className="section-tag">Clinical Intelligence</span>
                    <h2 className="section-title">Deep Analysis &<br />Remedy Mapping</h2>
                    <p className="section-description">
                        Unlock precise clinical insights that standard reports miss. Our AI correlates
                        symptoms with rubrics and maps the most effective remedies based on
                        global clinical datasets.
                    </p>



                    <p className="section-description" style={{ marginTop: '30px', fontSize: '1rem', fontStyle: 'italic', opacity: '0.8' }}>
                        "Transforming symptoms into solutions through advanced pattern recognition."
                    </p>
                </div>
            </div>

            {/* Stats Row: Sarvam AI Style */}
            <div className="stats-container">
                <div className="stats-inner">
                    <div className="stat-item">
                        <div className="stat-value">99.9%</div>
                        <div className="stat-label">Precision</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">50k+</div>
                        <div className="stat-label">Clinical Rubrics</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">{"<10s"}</div>
                        <div className="stat-label">Analysis Speed</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">24/7</div>
                        <div className="stat-label">AI Availability</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PatientAnalysis;
