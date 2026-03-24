import React, { useState, useEffect } from 'react';
import './ContactPage.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        inquiryType: 'General Inquiry',
        subject: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', organization: '', inquiryType: 'General Inquiry', subject: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-container reveal visible">
                <div className="contact-info">
                    <h1>Get in Touch</h1>
                    <p>Empowering Healthcare with Intelligent AI Solutions. We're here to help you revolutionize your healthcare practice.</p>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="info-icon">📧</div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <p>contact@medicoai.com</p>
                            </div>
                        </div>
                        
                        <div className="contact-brand-section">
                            <div className="brand-logo-small">
                                <img src="/logo.png" alt="MedicoAi Logo" />
                            </div>
                            <h3>Why Choose MedicoAi?</h3>
                            <ul className="brand-features">
                                <li>✨ Advanced AI Diagnostics</li>
                                <li>🩺 Unified Clinical Insights</li>
                                <li>📊 Data-Driven Healthcare</li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-social">
                        <a href="#" className="social-tag">LinkedIn</a>
                        <a href="#" className="social-tag">Twitter</a>
                        <a href="#" className="social-tag">Instagram</a>
                    </div>
                </div>

                <div className="contact-form-side">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2>Send us a Message</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Contact No.</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Organization / Clinic</label>
                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    placeholder="Medical Center"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Inquiry Type</label>
                            <select
                                name="inquiryType"
                                value={formData.inquiryType}
                                onChange={handleChange}
                                required
                            >
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Technical Support">Technical Support</option>
                                <option value="Partnership">Partnership</option>
                                <option value="Pricing">Pricing</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us more about your needs..."
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message
                            <span>→</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
