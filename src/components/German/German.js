import React from 'react'
import './German.css';
import insurancepic from '../../assests/family_insurance.87f8402cfad734ebe435.jpg';
import mt from '../../assests/money-transfer.6032ed3d6f67213f2318.jpg';
import ReadMore from '../useful components/ReadMore';
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
                                <p>A1, A2 Basic user</p>
                                
                            </p>
                        </div>
                    </div>
                    <div className="german-card">
                        <div className="german-card-body">
                            <p className="card-text">
                                <p>B1, B2 Independent user </p>
                            </p>
                        </div>
                    </div>
                    <div className="german-card">
                        <div className="german-card-body">
                            <p className="card-text">
                                <p>C1, C2 Proficient user</p>
                            </p>
                        </div>
                    </div>
                    <div className="german-card">
                        <div className="german-card-body">
                            <p className="card-text">
                                <p>For teachers</p>
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