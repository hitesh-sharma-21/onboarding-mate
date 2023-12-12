import React from 'react'
import './slider.css'
import family from '../../assests/family-and-pets.jpg'
function Slider() {
  return (
    <div className="slider-section">
      <div className="slider-heading">
        <h1>Our Best Services</h1>
      </div>
      <div className="slider-cards">
        <div className="slider-card">
          <div className="slider-card-img">
            <img src={family} alt="" />
          </div>
          <div className="slider-content">
            <h3>Family & Pets</h3>
            <p>Get your family and pets insured and safeguarded by us even before traveling to the new country. Choose us so that you have teh process simplified.</p>
          </div>
        </div>
        <div className="slider-card">
          <div className="slider-card-img">
            <img src={family} alt="" />
          </div>
          <div className="slider-content">
            <h3>Family & Pets</h3>
            <p>Get your family and pets insured and safeguarded by us even before traveling to the new country. Choose us so that you have teh process simplified.</p>
          </div>
        </div>
        <div className="slider-card">
          <div className="slider-card-img">
            <img src={family} alt="" />
          </div>
          <div className="slider-content">
            <h3>Family & Pets</h3>
            <p>Get your family and pets insured and safeguarded by us even before traveling to the new country. Choose us so that you have teh process simplified.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider