import React, { useState } from 'react'
import './nav.css';
import logo from '../../assests/onboarding-mate-logo.png';
function Nav() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(false)
  const [toggleDropDown2, setToggleDropDown2] = useState(false)
  const [toggleDropDown3, setToggleDropDown3] = useState(false)
  const [toggleDropDown4, setToggleDropDown4] = useState(false)

  const toggleFun = (e) => {
    e.preventDefault();
    setToggleBtn(!toggleBtn)
  }

  const toggleDropDownMenu=()=>{
   setToggleDropDown(!toggleDropDown)
  }
  const toggleDropDownMenu2=()=>{
   setToggleDropDown2(!toggleDropDown2)
  }
  const toggleDropDownMenu3=()=>{
   setToggleDropDown3(!toggleDropDown3)
  }
  const toggleDropDownMenu4=()=>{
   setToggleDropDown4(!toggleDropDown4)
  }
  return (
    <>
      <div className="before-nav"></div>
      <header>
        <div className="wrapper">
          <div className="logo" id='main-section'>
            <img src={logo} width="138px" />
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Counsellor</a></li>
            <li className='service-mega-menu'><a href="" style={{ 'position': 'relative' }} >Services</a>
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
                    <h4>Individual Service</h4>
                    <li>Liability</li>
                    <li>HouseHold</li>
                  </div>
                </ul>
              </div>
            </li>
            <li><a href="">Contact</a></li>
          </ul>
          <li id='mobile-menu-icon' onClick={toggleFun}><span>
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path></svg>
          </span></li>
        </div>

        {
          <div className={`mobile-menu ${toggleBtn === true ? 'show_menu' : 'hide_menu'}`}>
            <div className="close-menu-icon">
              <span onClick={toggleFun}>❌</span>
            </div>
            <ul>
              <li>Home</li>
              <li>Counsellor</li>
              <li>Blogs</li>
              <li>About</li>
              <li>Services <span>&gt;</span>
              <ul className='mobile-mega-menu'>
                  <li onClick={toggleDropDownMenu}> <h5 >Insurance <span> &nbsp; &gt;</span></h5>
                    <ul className={`m-menu insurance-menu ${toggleDropDown===true ? 'show_menu':'hide_menu'}`}>
                    <li>Public health</li>
                    <li>Private health</li>
                    <li>Liability</li>
                    <li>HouseHold</li>
                    <li>Public health</li>
                    <li>Private health</li>
                    <li>Liability</li>
                    <li>HouseHold</li>
                    <li>HouseHold</li>
                    </ul>
                  </li>
                  <li onClick={toggleDropDownMenu2}><h5>Banking <span> &nbsp; &gt;</span></h5>
                    <ul className={`m-menu banking-menu ${toggleDropDown2===true ? 'show_menu':'hide_menu'}`}>
                    <li>money transfer</li>
                    <li>current accounth</li>
                    <li>rental</li>
                    </ul>
                  </li>
                  <li onClick={toggleDropDownMenu3}><h5>Individual Service <span> &nbsp; &gt;</span></h5>
                  <ul className={`m-menu individual-menu  ${toggleDropDown3===true ? 'show_menu':'hide_menu'}`}>
                  <li>Public health</li>
                    <li>Private health</li>
                    <li>Liability</li>
                    <li>HouseHold</li>
                    <li>Liability</li>
                    <li>HouseHold</li>
                  </ul>
                  </li>
                  <li onClick={toggleDropDownMenu4}><h5>Council and Faith <span> &nbsp; &gt;</span></h5>
                  <ul className={`m-menu faith-menu ${toggleDropDown4===true ? 'show_menu':'hide_menu'}`}>
                  <li>Liability</li>
                    <li>HouseHold</li>
                  </ul>
                  </li>
                </ul>
              </li>
              <li>Con</li>
            </ul>
          </div>
        }
      </header>
    </>
  )
}

export default Nav