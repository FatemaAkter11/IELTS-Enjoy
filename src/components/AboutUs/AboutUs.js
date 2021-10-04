import React from 'react';
import './AboutUs.css';
import about from "../../images/about.png";
import team1 from "../../images/our-team-1.jpg";
import team2 from "../../images/our-team-2.jpg";
import team3 from "../../images/our-team-3.jpg";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <div className="about-container">
            {/* header part added */}
            <Header></Header>
            <div className="row mt-5 mx-auto">
                <div className="col-md-5 ms-4 mt-5">
                    <h1 className="fw-bold">The Best Way to Learn Any Foreign Language</h1>
                    <p>Whatever your reason for learning a new language, <br /> you can probably agree it’d be ideal to learn it fast. <br />
                        But learning a new language doesn’t need to be a slow or tedious process. <br />
                        Although nothing can replace the hard work and effort it requires, <br /> you can absolutely learn a new foreign language fast <br /> if you follow the right strategy and <br /> dedicate yourself to the process.</p>
                </div>
                <div className="col-md-6 mb-5">
                    <img className="w-50 h-75" src={about} alt="" />
                </div>
            </div>
            <div className="row mx-auto">
                <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
                <div className="col-md-3 card shadow-lg p-3 mb-5 bg-body rounded mx-auto">
                    <img src={team1} alt="" />
                    <h5 className="mt-3">Spanish Teacher</h5>
                    <h4>Amanda Peterson</h4>
                    <p><i class="fas fa-phone-volume text-danger"></i> 677870885779</p>
                </div>
                <div className="col-md-3 card shadow-lg p-3 mb-5 bg-body rounded mx-auto">
                    <img src={team2} alt="" />
                    <h5 className="mt-3">English Teacher</h5>
                    <h4>Sam Johnson</h4>
                    <p><i class="fas fa-phone-volume text-danger"></i> 6778702143256</p>
                </div>
                <div className="col-md-3 card shadow-lg p-3 mb-5 bg-body rounded mx-auto">
                    <img src={team3} alt="" />
                    <h5 className="mt-3">German Teacher</h5>
                    <h4>Pamela Reed</h4>
                    <p><i className="fas fa-phone-volume text-danger"></i> 677870884545</p>
                </div>
            </div>
            {/* footer part added */}
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;