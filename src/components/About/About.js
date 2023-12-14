import React from 'react'
import './About.css';
import aboutlg from '../../assests/about-large.jpeg';
import aboutsm from '../../assests/about-small..png';
import ReadMore from '../usefulComponents/ReadMore';
function About() {
  return (
    <>
    <div className="about-section">
        <div className="about-img">
            <div className="about-lg">
                <img src={aboutlg} alt="" />
            </div>
            <div className="about-sm">
                <img src={aboutsm} alt="" />
            </div>
        </div>
        <div className="about-desc">
          <h1>About Onboarding-Mate</h1>
          <p>Welcome to Onboarding Mate, your common platform and trusted companion for all individuals who are new to Germany and seeking assistance with various aspects of settling down in a foreign land. We understand that the challenges of navigating a new country, especially without fluency in the local language, can be overwhelming.</p>
          {/* <button className="read-more useful-component">READ MORE</button> */}
          <ReadMore btnname='READ MORE'/>
        </div>
    </div>
    </>
  )
}

export default About