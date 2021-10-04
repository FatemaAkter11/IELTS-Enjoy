import React, { useEffect, useState } from 'react';
import './Home.css';
import img from '../../images/home.jpg';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./SingleService.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="home-container">
            <div className="row my-5 home mx-auto">
                <div className="col-md-5 homeImg">
                    <img className="w-75 rounded" src={img} alt="" />
                </div>
                <div className="col-md-7 mt-3">
                    <h1>What is IELTS?</h1>
                    <p className="mt-3">
                        IELTS is an English language test for study, migration or work. <br /> Over three million people take our test every year. <br />
                        IELTS is accepted by more than 11,000  employers,<br /> universities, schools and immigrationbodies<br /> around the world.</p>
                    <button className="btn bg-danger text-white fw-bold rounded mt-3">Learn More About The Test</button>
                </div>
            </div>

            {/* services area*/}
            <div className="row">
                <h1 className="fw-bold fs-1 mb-5">Our Services</h1>
                <div className="col-md-12">
                    {/* service data load */}
                    <div className="row ms-4">
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            >
                            </Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;