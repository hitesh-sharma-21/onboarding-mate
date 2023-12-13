import React from 'react'
import './nav.css';
import logo from '../../assests/onboarding-mate-logo.png';
function Nav() {
  return (
    <>
      <div className="before-nav"></div>
      <header>
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="" srcset="" width="135px" />
          </div>
          <ul className="nav-links">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Counsellor</a></li>
            <li  className='service-mega-menu'><a href="" style={{ 'position': 'relative' }} >Services</a>
              <div className="mega-menu">
                <ul className="m-first-section ">
                  <div className='m-flex'>
                    <h4>Insurance</h4>
                    <li>Public health</li>
                    <li>Private health</li>
                    <li>Liability</li>
                    <li>HouseHold</li>
                    <li>Public health</li>
                    <li>Private health</li>
                    <li>Liability</li>
                    <li>HouseHold</li>
                    <li>HouseHold</li>
                  </div>
                </ul>
                <ul className="m-second-section ">
                  <div className='m-flex'>
                    <h4>Banking</h4>
                    <li>money transfer</li>
                    <li>current accounth</li>
                    <li>rental</li></div>
                </ul>
                <ul className="m-third-section">
                  <div className='m-flex'>
                    <h4>Individual Service</h4>
                    <li>Public health</li>
                    <li>Private health</li>
                    <li>Liability</li>
                    <li>HouseHold</li>
                    <li>Liability</li>
                    <li>HouseHold</li>
                  </div>
                </ul>
                <ul className="m-fourth-section ">
                  <div className='m-flex'>
                    <h4>Council and faith</h4>
                    <li>Liability</li>
                    <li>HouseHold</li>
                  </div>
                </ul>
              </div>
            </li>
            <li><a href="">Contact</a></li>
          </ul>
            <li id='mobile-menu-icon'><a href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path></svg></a></li>
        </div>
      </header>
    </>
  )
}

export default Nav