import React from 'react'
import './ChooseUs.css';
import guarantee from '../../assests/guarantee.png';
import mat from '../../assests/material-instrument.png';
import exprience from '../../assests/experience.png';
import plt from '../../assests/user-experience.png';
const data=[
    {
        id:1,
        title:"One-Stop Solution",
        desc:"We provide support to immigrants covering everything from finding accommodations, jobs, and legal and financial advice in one platform.",
        img:guarantee
    },
    {
        id:2,
        title:"Experienced Professionals",
        desc:"Our team of support system has decades of experience in assisting & Counselling students, job seekers, and others.",
        img:exprience
    },
    {
        id:3,
        title:"Tailored Service",
        desc:"We offer customised solutions catering for the unique needs and concerns of immigrants.",
        img:mat
    },
    {
        id:4,
        title:"Easy-to-Use Platform",
        desc:"Our platform is user-friendly and easy to navigate which makes it simple to access the information that you need.",
        img:plt
    }
];
function ChooseUs() {
  return (
    <div className="chooseus-section">
        <h1>Why Choose Us</h1>
        <div className="feature-area">
            {data.map((card) => (
               <div className="feature-card" key={card.id}>
               <div className="feature-card-logo">
                   <img src={card.img} alt="" />
               </div>
               <h3> {card.title}</h3>
               <p>{card.desc}</p>
           </div>
      ))}
        </div>
    </div>
  )
}

export default ChooseUs