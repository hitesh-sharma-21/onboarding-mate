import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
<div className="footer-section">
<div className="first-section">
    <div className="contact-us footer-flex">
        <h3>Contact Us</h3>
        <p>If you have any questions or need help, feel free to contact with our team.</p>
        <p className="email">
            <span style={{'color':'#efb44b','marginRight':' 10px'}}>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                </span>hello@onboarding-mate.com</p>
        <p className="address">Bahnhofstr. 13 27419 Sittensen Germany</p>
    </div>
    <div className="quick-links footer-flex">
        <h3>Quick Links</h3>
        <ul className='footer-flex'>
            <li>Contact Us</li>
            <li>Our Services</li>
            <li>About Company</li>
            <li>Blogs</li>
            <li>Imprint</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
        </ul>
    </div>
</div>
<div className="second-section">
    <div className="our-services footer-flex">
        <h3>Our Services</h3>
        <ul className='footer-flex'>
            <li>Insurance</li>
            <li>Banking</li>
            <li>Individual Service</li>
            <li>Council and Faith</li>
        </ul>
    </div>
    <div className="news-letter footer-flex">
        <h3>Newsletter</h3>
        <p>Established since 2000. Best Company in Germany.</p>
        <p className="social-media">Follow Us On Facebook:</p>
        <div className="footer-newsletter">
            <input type="email" name="" id="" placeholder='Email Address'/>
            <button><svg stroke="currentColor" fill="white"  viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg></button>
        </div>
    </div>
</div>
</div>
<div className="footer-copy">
    
<div className="footer-copyright">
    <p>© 2022 Onboarding-Mate. All right reserved.</p>
    <p>Designed and maintained by <span style={{
        'color':'var(--darkyellow)'
    }}> Digicode Studio</span></p>
    </div>
</div>
    </>
  )
}

export default Footer