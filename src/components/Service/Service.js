import React from 'react';
import './Service.css';

const Service = (props) => {
    // console.log(props.service);
    //distructuring
    const { name, price, image, description } = props.service || {};
    return (
        <div className="col-md-3 mb-4">
            <div className="card shadow-lg p-2 rounded  border border-primary" style={{ width: '18rem', height: 'h-100 d-inline-block' }}>
                <img src={image} className="service-img mx-auto" alt="..." />
                <div className="mt-3">
                    <h4 className="card-title"><span className="fw-bold text-center">Service:</span> {name}</h4>
                    <div className="text-center">
                        <h5><span className="fw-bold">Price:$</span>{price}</h5>
                    </div>
                    <div className="text-center">
                        <h5><span className="fw-bold"></span>{description}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;