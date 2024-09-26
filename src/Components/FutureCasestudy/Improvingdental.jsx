import React from "react";
import './Futurecase.css';
import caseimg from "../../assets/Futurecasestudy/improving-banner.jpg";
import impicon1 from "../../assets/Futurecasestudy/improvingicon1.png";
import impicon2 from "../../assets/Futurecasestudy/improvingicon2.png";
import impicon3 from "../../assets/Futurecasestudy/improvingicon3.png";
import dualethernet from "../../assets/Futurecasestudy/Dual-ethrnet-cam.jpg"
import relatedCaseImg1 from "../../assets/Futurecasestudy/AI-driven.jpg";
import Modelbutton from "../Button comp/Modelbutton";
import AnimatedButton from "../Button comp/AnimatedButton";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Improvingdental = () => {
  return (
    <div className="future-case-container">
      <Helmet>
                <title>4K Dental Loupe Camera Enhancements for European Provider </title>
                <meta name='description' content='Explore how e-con Systems created a custom 4K dental loupe camera to enhance dental documentation for a leading European imaging solutions provider.' />
            </Helmet>
      <div className='mainContainer'>
        <div className="future-case-banner">
          <img src={caseimg} alt="Banner" className="w-100" />
          <h1 className="future-case-heading">
            Improving Dental Documentation Using 4k Dental Loupe Camera for a Leading Europe Based Dental Imaging Solutions Provider        </h1>
      
          <Modelbutton className="future-case-button" text="Download casestudy" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" productName="CaseStudy" docName="improving-dental-documentation" title="Case Study" />

        </div>

        <h2 className="future-case-sub-heading">Summary of the Solution</h2>
        <p className="future-case-paragraph">
          e-con Systems collaborated with a leading Europe-based dental imaging solutions provider to enhance its dental documentation using a 4k dental loupe camera. We deployed a high-quality, compact modular camera featuring iHDR that is optimized for reduced heat dissipation with a design compatible with any dental loupes and lights.      </p>

        <h2 className="future-case-sub-heading">Key Challenges Faced by the Client</h2>
        <div className="future-case-image-row">
          <div className="future-case-challenge">
            <img src={impicon1} alt="Challenge 1" className="future-case-challenge-image" />
            <p>Loupe mount camera to overcome heavy intraoral sensors that have limited positioning</p>
          </div>
          <div className="future-case-challenge">
            <img src={impicon2} alt="Challenge 2" className="future-case-challenge-image" />
            <p>Seamless LED lighting with perfect focus and detail</p>
          </div>
          <div className="future-case-challenge">
            <img src={impicon3} alt="Challenge 3" className="future-case-challenge-image" />
            <p>Low heat iHDR camera for dentistry that produces high-quality videos</p>
          </div>
        </div>

        {/* Benefits Section */}
        <h2 className="future-case-benefits-title">Benefits of the Solution</h2>
        <div className="future-case-benefits-container">
          <img src={caseimg} alt="Benefits" className="future-case-benefits-image" />
          <div className="future-case-benefits-details">
            <ul>
              <li>High resolution, as well as high-quality videos and images from the dental loupes</li>
              <li>Miniaturized board to meet unique dental loupe requirements</li>
              <li>Aluminum heatsinks to reduce heat dissipation</li>
              <Modelbutton className="future-case-btn" text="Download casestudy" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" productName="CaseStudy" docName="improving-dental-documentation" title="Case Study" />

            </ul>
          </div>
        </div>

        {/* Related Case Studies Section */}
        <h2 className="related-case-studies-title">Related Case Studies</h2>
        <div className="related-case-container">
          <div className="related-case-card">
          <Link className="fuCaseIMGLINK" to="/case-studies/ai-portable-point-of-care-device" style={{ textDecoration: "none" }}>
            <img src={relatedCaseImg1} alt="Case Study 1" className="related-case-image" />
            </Link>
            <div className="related-case-details">
            <Link className="fuCaseTitleLINK" to="/case-studies/ai-portable-point-of-care-device" style={{ textDecoration: "none" }}>
              <h3>AI-driven and Portable Point-Of-Care Device for Pre-Cancer Screening for a US Medical Device Manufacturer</h3>
              </Link>
              <p>Read to know how e-con Systems developed a custom camera solution for an AI-driven, portable point-of-care device for pre-cancer screening.</p>
              <div className="releated-case-bu">
                <AnimatedButton className="related-case-button" text="Know more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/case-studies/ai-portable-point-of-care-device" />
              </div>
            </div>
          </div>
          <div className="related-case-card">
          <Link className="fuCaseIMGLINK" to="/case-studies/dual-ethernet-camera-integration" style={{ textDecoration: "none" }}>
            <img src={dualethernet} alt="Case Study 2" className="related-case-image" />
            </Link>
            <div className="related-case-details">
            <Link className="fuCaseTitleLINK" to="/case-studies/dual-ethernet-camera-integration" style={{ textDecoration: "none" }}>
              <h3>Integrating Dual Ethernet Cameras into Dental Operatory Lights for Improved Functionality</h3>
              </Link>
              <p>“Explore how we successfully integrated dual 4K cameras into dental operatory lights for a leading European dental device manufacturer.</p>
              <div className="releated-case-bu">
                <AnimatedButton className="related-case-button" text="Know more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/case-studies/dual-ethernet-camera-integration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Improvingdental;
