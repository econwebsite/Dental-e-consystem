import React from "react";
import ethernetCameras from "../../../assets/home images/integrating-dual-ethernet-cameras.jpg";
import AI from "../../../assets/home images/AI-driven.jpg";
import Improving from "../../../assets/home images/Improving-Dental.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";
import "./Casestudy.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Casestudy = () => {
  const navigate = useNavigate();

  return (
    <div className='casestudy-page'>

      <div className='casestudy-title'>
        <h1>Case Studies</h1>
        <div className='mainContainer'>
        <div className="casestudy-component-container">
          <div className="casestudy-left-column">
            <div className="casestudy-merged-box" data-aos="zoom-in-right" data-aos-duration="1200"  style={{cursor:"pointer"}}>
            <Link className="cardImgLink" to="/case-studies/dual-ethernet-camera-integration" style={{textDecoration:"none"}}>
            <img src={ethernetCameras} alt="Full Image" className="casestudy-full-image" />
            </Link>
              <div className="casestudy-box-content">
              <Link className="cardTitleLink" to="/case-studies/dual-ethernet-camera-integration" style={{textDecoration:"none"}}>
              <h4>Integrating Dual Ethernet Cameras into Dental Operatory Lights for Improved Functionality</h4>
              </Link>
                <p>Explore how we successfully integrated dual 4K cameras into dental operatory lights for a leading European dental device manufacturer. In this case study, we discuss the challenges we faced during the prototyping phase. Read how we customized the camera architecture and implemented other enhanced modifications, such as reduced latency and lens shading correction, to achieve superior image quality in brightly illuminated dental environments.</p>
                <AnimatedButton className="casestudy-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/case-studies/dual-ethernet-camera-integration"/>
              </div>
            </div>
          </div>
          <div className="casestudy-right-column" data-aos="zoom-in-left" data-aos-duration="1200">
            <div className="casestudy-box"  style={{cursor:"pointer"}}>
            <Link className="cardImgLink" to="/case-studies/ai-portable-point-of-care-device" style={{textDecoration:"none"}}>
              <img src={AI} alt="Box 1" className="casestudy-box-image" />
              </Link>
              <div className="casestudy-box-content">
                <h6>AI-driven and Portable Point-Of-Care Device for Pre-Cancer Screening for a US Medical Device Manufacturer</h6>
                <AnimatedButton className="casestudy-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/case-studies/ai-portable-point-of-care-device"/>
              </div>
            </div>
            <div className="casestudy-box" style={{cursor:"pointer"}}>
            <Link className="cardImgLink" to="/case-studies/4k-dental-loupe-camera-improvement" style={{textDecoration:"none"}}>
              <img src={Improving} alt="Box 2" className="casestudy-box-image" />
              </Link>
              <div className="casestudy-box-content">
                <h6>Improving Dental Documentation using 4k Dental Loupe Camera for a Leading Europe Based Dental Imaging Solutions Provider</h6>
                <AnimatedButton className="casestudy-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/case-studies/4k-dental-loupe-camera-improvement"/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
