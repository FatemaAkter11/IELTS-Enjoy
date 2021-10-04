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
    }, []);


    return (
        <div className="services-container" >
            {/* header added */}
            <Header></Header>
            <div className="row mt-5">
                <div className="col-md-12">
                    {/* service data load */}
                    <div className="row ms-4">
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>
            {/* footer added */}
            <Footer></Footer>
        </div>
    );
};

export default Services;