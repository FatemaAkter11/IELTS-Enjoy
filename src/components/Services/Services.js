import React, { useEffect, useState } from 'react';
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
            <div className="row">
                <h1 className="fw-bold fs-1 mb-5 mt-5">Our Services</h1>
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

export default Services;