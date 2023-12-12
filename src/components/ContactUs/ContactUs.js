import React from 'react'
import './ContactUs.css';
import contactimg from '../../assests/contact-us-image.7c20e87a7b04725d4991.jpg'
function ContactUs() {
  return (
<>
   <div className="contact-section">
    <div className="contact-main-div">
      <div className="contact-left">
              <img src={contactimg} alt="" />
      </div>

      <div className="contact-right">
      <h3>Contact Us</h3>
      <div className="form">

<div className="container">
  <form action="">
    <div className="row">
      <div>
       
        <input type="text" id="fname" name="firstname" placeholder="Select service"/>
      </div>

      <div>
      <select id="country" name="insurance" placeholder='insurance'>

    </select>
      </div>
    </div>
    <div className="row">
      <div>
       
        <input type="text" id="fname" name="name" placeholder="Name"/>
      </div>

      <div>
        <input type="text" id="email" name="email" placeholder="email"/>
      </div>
    </div>
      <div>
        <input type="text" id="subject" name="sbj" placeholder="subject"/>
      </div>

  
    <textarea id="subject" name="subject" placeholder="Write something.."rows={'4'}></textarea>

    {/* <input type="submit" value="Submit"/> */}
    <button> SEND YOUR QUERY</button>
  </form>
</div>
      </div>
      </div>
    </div>
   </div>
</>
    )
}

export default ContactUs