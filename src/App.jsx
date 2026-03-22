import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import StepGuide from './components/StepGuide';
import PatientAnalysis from './components/PatientAnalysis';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import PatientPortal from './components/PatientPortal';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HowToUse from './components/HowToUse';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function Home() {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <StepGuide />
            <PatientAnalysis />
            <Blogs />
            <FAQ />
        </>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<PatientPortal />} />
                <Route path="/how-to-use" element={<HowToUse />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
