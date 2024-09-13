import React from 'react';
import './Blogspage.css'; // Ensure this is the correct CSS file path
import Autofocusvsfixed from "../../../assets/home images/Autofocusvsfixed.jpg";
import CMOS from "../../../assets/home images/CMOS.jpg" ;
import ThreeImportant from "../../../assets/home images/Three-Important.jpg" ;
import Capturing from "../../../assets/home images/blog-choose-right-camera.jpg"
import AnimatedButton from "../../Button comp/AnimatedButton"
import { useNavigate } from 'react-router-dom';

const Blogspage = () => {
  const navigate = useNavigate();

  return (
    <div className='homeblog-pg'>
      <div className='Home-blogtitle'>
      <h1>Blogs</h1>
      <div className='mainContainer'>
      <div className="homeblog-component-container">
        <div className="homeblog-left-column">
          <div className="homeblog-merged-box" data-aos="zoom-in-right" data-aos-duration="1400" onClick={() => navigate('/Aguidtochoose')} style={{cursor:"pointer"}}>
            <img src={Capturing} alt="Full Image" className="homeblog-full-image" />
            <div className="homeblog-box-content">
              <h4>A Guide to Choosing the Right Dental Intraoral Camera</h4>
              <p>The adoption of intraoral cameras in dental clinics around the globe has enhanced the capabilities of dental professionals. Learn about the key features that make a dental intraoral camera truly effective. From macro imaging capabilities to high-resolution and wide-angle views, understand how these specifications enhance dental diagnostics and patient care.</p>
             <br></br>
             <p>Read the blog to learn how an intraoral camera functions and the factors to consider while designing one. The blog explores in-depth the key features required for an intra-oral camera, which are macro-imaging capability, high depth-of-field, auto white balance functionality, wider FOV, universal compatibility with dental software, and the need for a USB interface.</p>
             <br></br>
           
             <AnimatedButton className="homeblog-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/Aguidtochoose"></AnimatedButton>
             </div>
            
          </div>
        </div>
        <div className="homeblog-right-column" data-aos="zoom-in-left" data-aos-duration="1400">
          <div className="homeblog-box" onClick={() => navigate('/AutofocusBlog')} style={{cursor:"pointer"}}>
            <img src={Autofocusvsfixed} alt="Box 1" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Autofocus vs. Fixed focus: Which Lens to Choose for Intraoral Cameras?</h6>
           <AnimatedButton className="homeblog-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/AutofocusBlog"></AnimatedButton>
            </div>
          </div>
        
          <div className="homeblog-box" onClick={() => navigate('/Threeimportant')} style={{cursor:"pointer"}}>
            <img src={ThreeImportant} alt="Box 3" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Three Important Parameters in IntraOral Camera Technology</h6>
              <AnimatedButton className="homeblog-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="Threeimportant"></AnimatedButton>
            </div>
          </div>
          <div className="homeblog-box" onClick={() => navigate('/RightforExtraoral')} style={{cursor:"pointer"}}>
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
