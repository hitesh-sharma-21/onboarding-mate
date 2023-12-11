import React from 'react'
import './nav.css';
import logo from'../../assests/onboarding-mate-logo.png';
function Nav() {
    return (
      <>
   <div className="before-nav"></div>
      <header>
      <div className="wrapper">
      <div className="logo">
      <img src={logo} alt="" srcset="" width="120px"/>
      </div>
      <ul className="nav-links">
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Blogs</a></li>
                <li><a href="">Counsellor</a></li>
                <li><a href="">Services</a>
                </li>
                <li><a href="">Contact</a></li>
            </ul>
    </div>
   </header>
   </>
  )
}

export default Nav