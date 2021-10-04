import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Blog.css';
import blog from "../../images/blog.jpg";
import blog1 from "../../images/blog-1.jpg";
import blog2 from "../../images/blog-2.jpg";
import blog3 from "../../images/blog-3.jpg";
import blog4 from "../../images/blog-4.jpg";
import blog5 from "../../images/blog-5.jpg";
import blog6 from "../../images/blog-6.jpg";
import { Link } from 'react-router-dom';


const Blog = () => {
    return (
        <div classNameName="blog-container">
            {/* header part added */}
            <Header></Header>
            <div className="row shadow-lg p-3 mb-5 bg-body rounded my-5 mx-auto">
                <div className="col-md-6">
                    <h1>Learn the Basics About <br /> Preparing Your Students for <br /> IELTS</h1>
                    <Link to="/blog">
                        <button className="btn bg-danger text-white">Read More</button>
                    </Link>
                </div>
                <div className="col-md-4">
                    <img className="w-75" src={blog} alt="" />
                </div>
            </div>
            {/* blog for teacher */}
            <div className="row ">
                <h2 className="text-center fw-bold fs-1 mb-4">Blog Our Teacher</h2>
                <div className="col-md-4">
                    <img src={blog1} alt="" />
                    <p className="fw-bold text-info">May 21, 2021</p>
                    <h5>7 Reasons to Study in Class Rather <br /> than Study Alone</h5>
                </div>
                <div className="col-md-4">
                    <img src={blog2} alt="" />
                    <p className="fw-bold text-info">July 11, 2021</p>
                    <h5>5 Reasons Why You Should Consider <br /> Doing the FCE</h5>
                </div>
                <div className="col-md-4">
                    <img src={blog3} alt="" />
                    <p className="fw-bold text-info">June 10, 2021</p>
                    <h5>Learn English in London with Our <br />
                        Language School</h5>
                </div>
            </div>
            <div className="row my-5 mx-auto">
                <div className="col-md-4">
                    <img src={blog4} alt="" />
                    <p className="fw-bold text-info">September 30, 2021</p>
                    <h5>Test of Interactive English: <br /> Personal Experience</h5>
                </div>
                <div className="col-md-4">
                    <img src={blog5} alt="" />
                    <p className="fw-bold text-info">August 17, 2021</p>
                    <h5>60 Everyday Words and Phrases You <br /> Need to Know to Speak English</h5>
                </div>
                <div className="col-md-4">
                    <img src={blog6} alt="" />
                    <p className="fw-bold text-info">October 10, 2021</p>
                    <h5>English Language Courses for <br /> Post-Graduates</h5>
                </div>
            </div>
            {/* footer part added */}
            <Footer></Footer>
        </div>
    );
};

export default Blog;