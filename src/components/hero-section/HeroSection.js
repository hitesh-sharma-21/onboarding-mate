import React from 'react'
import './herosection.css';
import bgvideo from '../../assests/background.b7ce8eef4ff6db84384a.mp4';
function HeroSection() {
  return (
   <>
   <div className="hero">
            <video autoPlay loop muted playsInline src={bgvideo} type='video/mp4'  className='bg-video'> </video>
        <div className="content">
            <h1>Are you new to Germany?</h1>
            <p>Don't worry, we got your back! Let us connect you to <br /> the resources you need for a seamless transition into German life.</p>
        </div>
   </div>
   </>
  )
}

export default HeroSection