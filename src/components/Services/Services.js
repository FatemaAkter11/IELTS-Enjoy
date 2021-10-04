import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import '../Service/Service.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="services-container" >
            {/* header part added */}
            <Header></Header>
            <div className="row">
                <h1 className="fw-bold fs-1 mb-5 mt-5">Our More Services</h1>
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
            {/* footer part added */}
            <Footer></Footer>
        </div>
    );
};

export default Services;