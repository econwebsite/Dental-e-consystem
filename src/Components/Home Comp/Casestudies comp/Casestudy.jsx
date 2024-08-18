import React from "react";
import Dentalimg from "../../../assets/home images/Casestudyleftcard.jpg";
import rightimg1 from "../../../assets/home images/Casestudyright1.jpg";
import rightimg2 from "../../../assets/home images/Casestudyrigh2.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";
import "./Casestudy.css"
const Casestudy = () => {
  return (
    <div className='casestudy-page'>
      <div className='casestudy-title'>
        <h1>Case Studies</h1>
        <div className='mainContainer'>
        <div className="casestudy-component-container">
          <div className="casestudy-left-column">
            <div className="casestudy-merged-box" data-aos="zoom-in-right" data-aos-duration="1000">
              <img src={Dentalimg} alt="Full Image" className="casestudy-full-image" />
              <div className="casestudy-box-content">
                <h4>The Roadmap of Dual Ethernet Camera Integration in Dental Operatory Lights</h4>
                <p>Explore how we successfully integrated dual 4K cameras into dental operatory lights for a leading European dental device manufacturer. In this case study, we discuss the challenges we faced during the prototyping phase. Read how we customized the camera architecture and implemented other enhanced modifications, such as reduced latency and lens shading correction, to achieve superior image quality in brightly illuminated dental environments.</p>
                <AnimatedButton className="casestudy-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/" />
              </div>
            </div>
          </div>
          <div className="casestudy-right-column" data-aos="zoom-in-left" data-aos-duration="1000">
            <div className="casestudy-box">
              <img src={rightimg1} alt="Box 1" className="casestudy-box-image" />
              <div className="casestudy-box-content">
                <h6>AI-driven and Portable Point-Of-Care Device for Pre-Cancer Screening for a US Medical Device Manufacturer</h6>
                {/* <p>Read to know how e-con Systems developed a custom camera solution for an AI-driven, portable point-of-care device for pre-cancer screening.</p> */}
                <AnimatedButton className="casestudy-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/" />
              </div>
            </div>
            <div className="casestudy-box">
              <img src={rightimg2} alt="Box 2" className="casestudy-box-image" />
              <div className="casestudy-box-content">
                <h6>Improving Dental Documentation using 4k Dental Loupe Camera for a Leading Europe Based Dental Imaging Solutions Provider</h6>
                {/* <p>This case study explores how e-con Systems developed a custom 4K dental loupe camera for a leading European dental imaging solutions provider.</p> */}
                <AnimatedButton className="casestudy-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/" />
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
