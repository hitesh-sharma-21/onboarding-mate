import React from 'react'
import './slider.css';
import family from '../../assests/family-and-pets.jpg';
import Hi from '../../assests/home_insurance.2c0bd5282a4a47e2ed4d.jpg';
import mi from '../../assests/medical_insurance.a008b389ed02e5addef2.jpg';

function SliderSection() {
  let slider_data =[{
    id:1,
    title:'Family & Pet',
    desc:'Get your family and pets insured and safeguarded by us even before traveling to the new country. Choose us so that you have teh process simplified',
    img:family
  },
  {
    id:2,
    title:'Home Insurance',
    desc:'Protect your new home with specialized insurance coverage for immigrants. Safeguard your investment and peace of mind.',
    img:Hi
  },
  {
    id:3,
    title:'Medical Insurance',
    desc:'Stay healthy and protected with our specialized health insurance for immigrants. Access quality care and enjoy peace of mind.',
    img:mi
  },
  ]
  return (
    <>

 <div className="slider">
      <div className="slider-container">
            <h2>Our Best Servicess</h2>
          <div className="slides">
          <div className="slide-card">
                      <div className="slide-card-image">
                                <img src={family} alt="" />
                          <div className="slider-card-content">
                                <h4>Family & Pet</h4>
                                <p>Get your family and pets insured and safeguarded by us even before traveling to the new country. Choose us so that you have teh process simplified</p>
                          </div>
                      </div>
                   </div>
                   <div className="slide-card">
                      <div className="slide-card-image">
                                <img src={family} alt="" />
                          <div className="slider-card-content">
                                <h4>Family & Pet</h4>
                                <p>Get your family and pets insured and safeguarded by us even before traveling to the new country. Choose us so that you have teh process simplified</p>
                          </div>
                      </div>
                   </div>
                   <div className="slide-card">
                      <div className="slide-card-image">
                                <img src={family} alt="" />
                          <div className="slider-card-content">
                                <h4>Family & Pet</h4>
                                <p>Get your family and pets insured and safeguarded by us even before traveling to the new country. Choose us so that you have teh process simplified</p>
                          </div>
                      </div>
                   </div>
          </div>
      </div>
 </div>
    </>
  )
}

export default SliderSection