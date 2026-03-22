import React, { useEffect, useRef } from 'react';
import './HowToUse.css';

const steps = [
    {
        number: "Step 01",
        title: "Clinical Intake",
        description: "Launch the 'Clinical Intake' portal to register a new patient. Populate the comprehensive profile including identity, contact, and social details, then click 'Save Record' to securely store the data.",
        image: "/how_to_use_step1_clinical_intake.png",
        badge: "Patient Registration"
    },
    {
        number: "Step 02",
        title: "Access Patient Records",
        description: "Navigate to the Patient Dashboard where all clinical records are centralized. Locate the specific patient and click the robot icon to initiate a specialized AI analysis for their case.",
        image: "/how_to_use_step2_patient_record.png",
        badge: "Dashboard Navigation"
    },
    {
        number: "Step 03",
        title: "Launch Catalyst",
        description: "Use the global sidebar to access the 'Analysis Engine' at any time. This central hub provides quick access to the AI Clinical Assistant for rapid diagnostic support.",
        image: "/how_to_use_step2_robot_button.png",
        badge: "Smart Navigation"
    },
    {
        number: "Step 04",
        title: "AI Deep Search",
        description: "Enter the patient's symptoms and clinical observations into the Analysis Engine. Click the 'Send' button and let our advanced AI models process the data for approximately 60 seconds.",
        image: "/how_to_use_step3_ai_search.png",
        badge: "AI Processing"
    },
    {
        number: "Step 05",
        title: "Analyze Results",
        description: "Review the 'Remedy Analysis' dashboard featuring precision-matched results (≥40% match). Each card provides deep insights; click 'Assign' to link a treatment to the clinical record.",
        image: "/how_to_use_step4_remedy_results.png",
        badge: "Diagnostic Insights"
    },
    {
        number: "Step 06",
        title: "Remedy Assignment",
        description: "Finalize the treatment plan by selecting the patient from the confirmation modal. This action bridges the AI analysis with the physical patient record for a complete digital history.",
        image: "/how_to_use_step5_assign_patient.png",
        badge: "Record Finalization"
    }
];

function HowToUse() {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const stepRows = document.querySelectorAll('.step-row');
        stepRows.forEach(row => observerRef.current.observe(row));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="how-to-use-page">
            <div className="how-to-use-header">
                <div className="step-badge">Platform Guide</div>
                <h1>How to Use Medico AI</h1>
                <p>Follow our simple 5-step workflow to register patients, perform AI-powered clinical analysis, and assign the most effective remedies with precision.</p>
            </div>

            <div className="steps-container">
                {steps.map((step, index) => (
                    <div key={index} className="step-row">
                        <div className="step-image-wrapper">
                            <img src={step.image} alt={step.title} className="step-image" />
                        </div>
                        <div className="step-content">
                            <div className="step-header">
                                <div className="step-indicator">
                                    <span className="step-label">Step</span>
                                    <span className="step-count">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                                </div>
                                <div className="step-badge">{step.badge}</div>
                            </div>
                            <h2>{step.title}</h2>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HowToUse;
