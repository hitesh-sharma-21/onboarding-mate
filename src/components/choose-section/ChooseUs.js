import React from 'react'
import './ChooseUs.css';
import guarantee from '../../assests/guarantee.png';
import mat from '../../assests/material-instrument.png';
import exprience from '../../assests/experience.png';
import plt from '../../assests/user-experience.png';
function ChooseUs() {
  return (
    <div className="chooseus-section">
        <h1>Why Choose Us</h1>
        <div className="feature-area">
            <div className="feature-card">
                <div className="feature-card-logo">
                    <img src={guarantee} alt="" />
                </div>
                <h3> One-Stop Solution</h3>
                <p>We provide support to immigrants covering everything from finding accommodations, jobs, and legal and financial advice in one platform.</p>
            </div>
            <div className="feature-card">
                <div className="feature-card-logo">
                    <img src={exprience} alt="" />
                </div>
                <h3>Experienced Professionals</h3>
                <p>Our team of support system has decades of experience in assisting & Counselling students, job seekers, and others.</p>
            </div>
            <div className="feature-card">
                <div className="feature-card-logo">
                    <img src={mat} alt="" />
                </div>
                <h3> Tailored Service</h3>
                <p>We offer customised solutions catering for the unique needs and concerns of immigrants.</p>
            </div>
            <div className="feature-card">
                <div className="feature-card-logo">
                    <img src={plt} alt="" />
                </div>
                <h3>Easy-to-Use Platform</h3>
                <p>Our platform is user-friendly and easy to navigate which makes it simple to access the information that you need.</p>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs