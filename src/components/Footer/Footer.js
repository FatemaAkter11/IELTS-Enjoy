import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>IELTS ENJOY</h1>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <i class="fab fa-instagram"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-facebook-messenger"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-youtube"></i>
                                    </div>
                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        Over 11,000 organisations have chosen IELTS for language skills verification!
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>All rights reserved  © IELTS Enjoy </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu"> About us</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu"> Teachers</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3>Sign up for the newsletter</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Please Enter Your Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="footer-icon">
                                        <i class="fas fa-phone-volume"></i>
                                    </div>
                                    <div>
                                        <h5>+1 8 900 666 25 26</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="footer-icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <p>
                                            150 Savar, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;