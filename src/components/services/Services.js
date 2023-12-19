import React from 'react'
import './Service.css';
import insurance from '../../assests/insurance.2eb7cf8977ac35d24644.png';
import mt from '../../assests/transfer.86e2ea5175545d13190f.png';
import oe from '../../assests/orientation.68a5cd8a4e48bf09602c.png';
import Immigration from '../../assests/immigration.2394fce6ee73321844b9.png';
import house from '../../assests/house-home.d19124d335aa8771abd7.png';
import family from '../../assests/family-and-pets.671894c0f7c1c163e4d0.png';
import  setling from '../../assests/settling-in-moving-out.fcc2440204f3967fe4ce.png';
import Expense from '../../assests/expense-management.9aac07ed2575fba49c48.png';
import Tax from '../../assests/tax-return.da6524ea6dbc0908b2c5.png';
import German  from '../../assests/learn-german.828f0f46a01478e5528b.png';

const data = [
  {
    id: 1,
    title: " Insurance",
    description: "Protect yourself and your family with our insurance services tailored specifically for immigrants." ,
    img: insurance,  //extract  it from images folder
  },
  {
    id: 2,
    title: "Money Transfer",
    description: "We offer competitive exchange rates to save your money with fast, secure, and reliable money transfer services internationally." ,
    img: mt  //extract  it from images folder
  },
  {
    id: 3,
    title: "Orientation",
    description: "We provide the best services that will help you once you come to Germany" ,
    img: oe  //extract  it from images folder
  },
  {
    id: 4,
    title: "Immigration",
    description: "Having problems finding new houses in Germany? We might help." ,
    img: Immigration  //extract  it from images folder
  },
  {
    id: 5,
    title: "House & Home",
    description: "We got your children, pets and family covered with our world class and most reliant services and offers" ,
    img: house  //extract  it from images folder
  },
  {
    id: 6,
    title: "Family & Pets",
    description: "Protect yourself and your family with our insurance services tailored specifically for immigrants." ,
    img: family  //extract  it from images folder
  },
  {
    id: 7,
    title: "Settling in & Moving out",
    description: "Settling in and Moving out of Germany has never been easier, want to know how?" ,
    img: setling  //extract  it from images folder
  },
  {
    id: 8,
    title: "Expense Management",
    description: "Having a problem managing your expenses? Don't worry, we got you." ,
    img:  Expense //extract  it from images folder
  },
  {
    id: 9,
    title: "Tax Return Online",
    description: "With the motto 'Taxes simple for everyone', our partner, WUNDERTAX, has developed into the leading provider of target group-oriented tax solutions. Simple, understandable and secure. Get your tax refund quickly and easily with WUNDERTAX tax program." ,
    img: Tax  //extract  it from images folder
  },
  {
    id: 10,
    title: "Learn German For free",
    description: "With our services and our mission to make your life as easy as possible, we now provide you courses for each domain to learn German for free." ,
    img: German  //extract  it from images folder
  },
] ;
function Services() {
  return (
 <>
    <div className="service-section">
      <div className="heading"><h1>Our Service</h1></div>
      <div className="service-cards">
      {data.map((user) => (
               <div className="cards" key={user.id} id={user.id}>
                  <div className="card-logo"><img src={user.img} height='64px' alt="" />
                  </div>
                  <div className="card-heading"><h3>{user.title}</h3></div>
                  <div className={`card-desc ${user.id===9?'sm-font':''}`}><p>{user.description}</p></div>
                  <button className="card-btn">Read More <span> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg> </span></button>
               </div>
           
      ))}
        <div className="l-card">
                <h3>We are professional <span>Onboarding providing service</span></h3>
                <p>We love to provide you our help and <br />
                we look forward to listening to your feedbacks and help us get better for the future.</p>
             < button>Provide Feedback</button>
      </div>
        </div>
    </div>
 </>
  )
}

export default Services