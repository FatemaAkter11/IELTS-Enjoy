import React from 'react';
import './Service.css';

const Service = (props) => {
    console.log(props.service);
    //distructuring
    const { name, price, image } = props.service || {};
    return (
        <div className="col-md-3 mb-4">
            <div className="card shadow-lg p-2 rounded  border border-primary" style={{ width: '18rem', height: 'h-100 d-inline-block' }}>
                <img src={image} className="service-img mx-auto" alt="..." />
                <div className="mt-3">
                    <h5 className="card-title"><span className="fw-bold text-center">Service:</span> {name}</h5>
                    <div className="text-center">
                        <p><span className="fw-bold">Price:$</span>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;