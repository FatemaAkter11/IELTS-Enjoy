import React from 'react';
import './Home.css';
import img from '../../images/home.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="row my-5 home mx-auto">
                <div className="col-md-5 homeImg">
                    <img className="w-75 rounded" src={img} alt="" />
                </div>
                <div className="col-md-7">
                    <h1>What is IELTS?</h1>
                    <p>
                        IELTS is an English language test for study, migration or work. <br /> Over three million people take our test every year. <br />
                        IELTS is accepted by more than 11,000  employers,<br /> universities, schools and immigrationbodies<br /> around the world.</p>
                    <button className="btn bg-danger text-white fw-bold rounded">Learn More About The Test</button>
                </div>
            </div>

            {/* services area*/}
        </div>
    );
};

export default Home;