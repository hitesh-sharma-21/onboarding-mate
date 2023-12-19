import React from 'react'
import './German.css';
import insurancepic from '../../assests/family_insurance.87f8402cfad734ebe435.jpg';
import mt from '../../assests/money-transfer.6032ed3d6f67213f2318.jpg';
import ReadMore from '../usefulComponents/ReadMore';
function German() {
    return (
        <>
        <div className="german">

            <div className="german-section">
                <div className="german-desc">
                    <h2>Learn German Free Online</h2>
                    <p>Deutsche Welle (DW) is Germany's international broadcaster and one of the most successful international media outlets. With Deutsche Welle's mobile courses, you can learn German easily and free of charge. Whether you are a beginner or highly proficient, this is where you will find German courses. You can also learn German with the news or music - from level A1 to C1. For German teachers there are teaching materials and the latest on German language teaching:</p>
                    {/* <button className="read-more">CLICK HERE</button> */}
                    <ReadMore btnname='CLICK HERE'/>
                </div>

                <div className="german-services">
                    <div className="german-card">
                        <div className="german-card-body">
                            <p className="card-text">
                                A1, A2 Basic user
                                <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="german-card">
                        <div className="german-card-body">
                            <p className="card-text">
                                B1, B2 Independent user
                                <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="german-card">
                        <div className="german-card-body">
                            <p className="card-text">
                                C1, C2 Proficient user
                                <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="german-card">
                        <div className="german-card-body">
                            <p className="card-text">
                                For teachers
                                <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="insurance-section-parent-div">
                <div className="insurance-section-main-div">
                    <div className="left-section">
                        <div className="left-section-img">
                            <img src={insurancepic} alt="" />
                        </div>
                    </div>

                    <div className="right-section">
                        <h2>Life Insurance</h2>
                        <p>We offer life insurance services for immigrants in Germany, providing financial protection and peace of mind for you and your loved ones. Our policies are designed to meet the unique needs of newcomers, with flexible options and affordable rates. <br />
                            We understand the challenges of settling into a new country, which is why we offer personalized advice and support to help you make informed decisions about your life insurance needs. Contact us today to learn more and secure your future in Germany.</p>
                        {/* <button className="read-more">READ MORE</button> */}
                        <ReadMore btnname='READ MORE'/>
                    </div>
                </div>
            </div>
            <div className="money-transfer-section">
            <div className="insurance-section-parent-div">
                <div className="insurance-section-main-div">
                    <div className="left-section">
                        <div className="left-section-img">
                            <img src={mt} alt="" />
                        </div>
                    </div>

                    <div className="right-section">
                        <h2>Money Transfer</h2>
                        <p>Our platform is fast, reliable, and secure, allowing you to send money to your loved ones anywhere in the world. We offer competitive exchange rates and low fees, so you can save money while staying connected with your family and friends.
                        <br />
                        Our user-friendly interface makes it easy to send money from your computer or mobile device, with 24/7 customer support available to answer any questions you may have.
                        </p>
                        {/* <button className="read-more">READ MORE</button> */}
                        <ReadMore btnname='READ MORE'/>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default German