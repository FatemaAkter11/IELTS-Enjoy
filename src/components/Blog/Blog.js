import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import blog1 from "../../images/blog-1.jpg";
import blog2 from "../../images/blog-2.jpg";
import blog3 from "../../images/blog-3.jpg";
import blog4 from "../../images/blog-4.jpg";
import blog5 from "../../images/blog-5.jpg";
import blog6 from "../../images/blog-6.jpg";


const Blog = () => {
    return (
        <div className="blog-container">
            {/* header part added */}
            <Header></Header>
            <div className="row my-5 mx-auto">
                <h1 className="text-center fw-bold fs-1 mb-4">Blogs For Teacher</h1>
                <div className="col-md-4">
                    <img src={blog1} alt="" />
                    <p className="text-success fw-bold">April 24, 2021</p>
                    <h5>7 Reasons to Study in Class Rather <br /> than Study Alone</h5>
                </div>
                <div className="col-md-4">
                    <img src={blog2} alt="" />
                    <p className="text-success fw-bold">May 12, 2021</p>
                    <h5>5 Reasons Why You Should Consider <br /> Doing the FCE</h5>
                </div>
                <div className="col-md-4">
                    <img src={blog3} alt="" />
                    <p className="text-success fw-bold">June 19,  2021</p>
                    <h5>Learn English in London with Our <br /> Language School</h5>
                </div>
            </div>
            <div className="row my-5 mx-auto">
                <div className="col-md-4">
                    <img src={blog4} alt="" />
                    <p className="text-success fw-bold">July 25,2021</p>
                    <h5>Test of Interactive English: <br /> Personal Experience</h5>
                </div>
                <div className="col-md-4">
                    <img src={blog5} alt="" />
                    <p className="text-success fw-bold">August 14,  2021</p>
                    <h5>60 Everyday Words & Phrases You <br /> Need to Know to Speak English</h5>
                </div>
                <div className="col-md-4">
                    <img src={blog6} alt="" />
                    <p className="text-success fw-bold">September 11,  2021</p>
                    <h5>English Language Courses for Post- <br /> Graduates</h5>
                </div>
            </div>
            {/* footer part added */}
            <Footer></Footer>
        </div>
    );
};

export default Blog;