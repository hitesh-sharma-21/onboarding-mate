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
            <li id='mobile-menu-icon' onClick={toggleFun}><a href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path></svg></a></li>
        </div>

{
  toggleBtn &&
  <div className='mobile-nav'>

  <div className="mobile-menu">
    <div className="close-menu-icon">
    <span onClick={closeFun}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" height="2em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color: 'white',fontSize: '18px',justifyContent: 'flex-start'}}><path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg></span>
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