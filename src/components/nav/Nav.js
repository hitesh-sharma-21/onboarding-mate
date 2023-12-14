import React, { useState } from 'react'
import './nav.css';
import logo from '../../assests/onboarding-mate-logo.png';
function Nav() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const toggleFun=(e)=>{
    e.preventDefault();
    setToggleBtn(true)
  }
  const closeFun=()=>{
    setToggleBtn(false)
  }
  console.log(toggleBtn)
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
            <li id='mobile-menu-icon' onClick={toggleFun}>⭕</li>
        </div>

{
  toggleBtn &&
  <div className='mobile-nav'>

  <div className="mobile-menu">
    <div className="close-menu-icon">
    <span onClick={closeFun}>❌</span>
    </div>
    <ul>
      <li>Home</li>
      <li>Counsellor</li>
      <li>Blogs</li>
      <li>About</li>
      <li>Services</li>
      <li>Con</li>
    </ul>
  </div>
</div>
}

      </header>
    </>
  )
}

export default Nav