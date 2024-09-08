import React from 'react';
import './Blogspage.css'; // Ensure this is the correct CSS file path
import Autofocusvsfixed from "../../../assets/home images/Autofocusvsfixed.jpg";
import CMOS from "../../../assets/home images/CMOS.jpg" ;
import ThreeImportant from "../../../assets/home images/Three-Important.png" ;
import Capturing from "../../../assets/home images/blog-choose-right-camera.jpg"
import AnimatedButton from "../../Button comp/AnimatedButton"

const Blogspage = () => {
  return (
    <div className='homeblog-pg'>
      <div className='Home-blogtitle'>
      <h1>Blogs</h1>
      <div className='mainContainer'>
      <div className="homeblog-component-container">
        <div className="homeblog-left-column">
          <div className="homeblog-merged-box" data-aos="zoom-in-right" data-aos-duration="2200">
            <img src={Capturing} alt="Full Image" className="homeblog-full-image" />
            <div className="homeblog-box-content">
              <h4>A Guide to Choosing the Right Dental Intraoral Camera</h4>
              <p>The adoption of intraoral cameras in dental clinics around the globe has enhanced the capabilities of dental professionals. Learn about the key features that make a dental intraoral camera truly effective. From macro imaging capabilities to high-resolution and wide-angle views, understand how these specifications enhance dental diagnostics and patient care.</p>
             <br></br>
             <p>The adoption of intraoral cameras in dental clinics around the globe has enhanced the capabilities of dental professionals. Learn about the key features that make a dental intraoral camera truly effective. From macro imaging capabilities to high-resolution and wide-angle views, understand how these specifications enhance dental diagnostics and patient care.</p>
             <br></br>
           
             <AnimatedButton className="homeblog-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/Aguidtochoose"></AnimatedButton>
             </div>
            
          </div>
        </div>
        <div className="homeblog-right-column" data-aos="zoom-in-left" data-aos-duration="2200">
          <div className="homeblog-box">
            <img src={Autofocusvsfixed} alt="Box 1" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Autofocus vs. Fixed focus: Which Lens to Choose for Intraoral Cameras?</h6>
           <AnimatedButton className="homeblog-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/AutofocusBlog"></AnimatedButton>
            </div>
          </div>
        
          <div className="homeblog-box">
            <img src={ThreeImportant} alt="Box 3" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Three Important Parameters in Intra Oral Camera Technology</h6>
              <AnimatedButton className="homeblog-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="Threeimportant"></AnimatedButton>
            </div>
          </div>
          <div className="homeblog-box">
            <img src={CMOS} alt="Box 2" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Choosing the right CMOS cameras for Extraoral Imaging</h6>
              <AnimatedButton className="homeblog-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/RightforExtraoral"></AnimatedButton>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Blogspage;
