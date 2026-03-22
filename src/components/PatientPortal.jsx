import React, { useEffect } from 'react';
import './PatientPortal.css';

const PatientPortal = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            category: "Homeopathic AI",
            badge: "Holistic intelligence",
            intro: "Bridging centuries of natural wisdom with the power of modern neural networks to provide truly personalized healing.",
            theme: "homeo",
            features: [
                {
                    title: "Easy Holistic Analysis",
                    desc: "Our AI simplifies the complex process of repertorization. By analyzing natural language symptoms, it instantly maps patterns to the Materia Medica, helping you find the most similar remedy with surgical precision and ease.",
                    benefits: [
                        "Translates vague symptoms into exact repertory rubrics",
                        "Intuitive diagnosis guided by AI-driven prompts",
                        "Reduces repertorization time from hours to seconds"
                    ],
                    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1000&auto=format&fit=crop",
                    icon: "fas fa-leaf"
                },
                {
                    title: "Deep Patient History Vault",
                    desc: "Beyond simple records, our system tracks the 'Vital Force' over time. It intelligently organizes history by constitutional types and past remedy responses, uncovering hidden triggers and miasmatic patterns.",
                    benefits: [
                        "Visual timeline of constitutional progression",
                        "Secure, encrypted vault for sensitive patient journeys",
                        "Automatic cross-reference of past successful remedies"
                    ],
                    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
                    icon: "fas fa-history"
                },
                {
                    title: "Fast Remedy Provision",
                    desc: "Access a global database of thousands of remedies instantly. The AI performs real-time searches across major Materia Medicas, suggesting primary and complementary remedies tailored to the unique totality of symptoms.",
                    benefits: [
                        "Instant access to 5000+ Materia Medica entries",
                        "Keynote-based remedy ranking for accuracy",
                        "Automated reminders for follow-ups and potency changes"
                    ],
                    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1000&auto=format&fit=crop",
                    icon: "fas fa-magic"
                }
            ]
        },
        {
            category: "Allopathic AI",
            badge: "Clinical Precision",
            intro: "Evidence-based intelligence designed to enhance diagnostic accuracy, patient safety, and clinical efficiency.",
            theme: "allo",
            features: [
                {
                    title: "Precision Diagnostic Support",
                    desc: "Built for high-stakes medical environments. Our AI integrates with the latest clinical trials and global health databases to provide evidence-based diagnostic suggestions that assist doctors in rapid and safe decision-making.",
                    benefits: [
                        "Real-time sync with latest medical research",
                        "Minimizes diagnostic errors with pattern verification",
                        "Streamlined interface for fast-paced ER and clinics"
                    ],
                    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop",
                    icon: "fas fa-microscope"
                },
                {
                    title: "Smart Clinical History",
                    desc: "A centralized command center for patient data. Track lab results, imaging, and medication history in a unified, AI-analyzed view that flags risks, allergies, and potential drug-drug interactions automatically.",
                    benefits: [
                        "Automated risk assessment and allergy flagging",
                        "End-to-end management of multi-specialty records",
                        "Data-driven insights into long-term patient health trends"
                    ],
                    image: "https://images.unsplash.com/photo-1532187875605-1838d737032e?q=80&w=1000&auto=format&fit=crop",
                    icon: "fas fa-file-medical"
                },
                {
                    title: "Fast Medicine Delivery",
                    desc: "Speed up the prescription cycle without sacrificing safety. Our AI suggests optimal dosages based on renal function, weight, and age, preventing adverse events and getting the right treatment to the patient faster.",
                    benefits: [
                        "Automated dosage & interaction checking",
                        "Instant digital prescription transmission",
                        "Reduces medication errors by up to 95%"
                    ],
                    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1000&auto=format&fit=crop",
                    icon: "fas fa-pills"
                }
            ]
        }
    ];

    return (
        <div className="features-showcase">
            <div className="showcase-hero animate-fade-in">
                <h1 className="showcase-title">Healthcare Reinvented</h1>
                <p className="showcase-subtitle">Explaining the power of our dual-AI architecture for modern practitioners.</p>
            </div>

            <div className="showcase-container">
                {sections.map((section, sIndex) => (
                    <div key={section.category} className={`showcase-category-block ${section.theme}`}>
                        <div className="section-header animate-slide-up">
                            <span className={`badge ${section.theme}`}>{section.badge}</span>
                            <h2 className="section-main-title">{section.category}</h2>
                            <p className="section-intro">{section.intro}</p>
                        </div>

                        {section.features.map((feature, fIndex) => (
                            <div key={feature.title} className={`showcase-row ${fIndex % 2 === 0 ? '' : 'reverse'} animate-slide-up`}>
                                <div className="showcase-image-box">
                                    <img src={feature.image} alt={feature.title} />
                                    <div className="image-overlay-glow"></div>
                                </div>
                                <div className="showcase-text-box">
                                    <div className="feature-icon-circle">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-desc">{feature.desc}</p>
                                    <div className="benefits-cluster">
                                        <h4>Strategic Benefits</h4>
                                        <ul className="benefits-list">
                                            {feature.benefits.map(benefit => (
                                                <li key={benefit}>
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PatientPortal;
