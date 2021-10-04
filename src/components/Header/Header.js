import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container ">
            <div className="header">
                <div className="row d-flex header align-items-center justify-content-center">
                    <MenuBar></MenuBar>
                    <div className="col-md-7">
                        <h1 className="title">
                            WELCOME TO OUR
                            <br />IELTS ENJOY (ENGLISH SKILLS)
                        </h1>
                        <p className="text-white text-center mt-3">
                            Our language center offers group and personal lessons in English and other modern languages for all ages and levels of knowledge.
                        </p>
                        <Link to="/about">
                            <button className="mt-3 about-btn bg-danger">About Us</button>
                        </Link>
                    </div>
                    <div className="col-md-5"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;