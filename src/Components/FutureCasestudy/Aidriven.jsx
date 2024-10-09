import React from "react";
import './Futurecase.css';
import caseimg from "../../assets/Futurecasestudy/aidriven-banner.jpg";
import aiicon1 from "../../assets/Futurecasestudy/aiicon1.png";
import aiicon2 from "../../assets/Futurecasestudy/aiicon2.png";
import aiicon3 from "../../assets/Futurecasestudy/aiicon3.png";
import relatedCaseImg2 from "../../assets/Futurecasestudy/Improving-Dental.jpg";
import dualethernet from "../../assets/Futurecasestudy/Dual-ethrnet-cam.jpg";
import benifit from "../../assets/Futurecasestudy/benifit-aidriven.jpg"
import Modelbutton from "../Button comp/Modelbutton";
import AnimatedButton from "../Button comp/AnimatedButton";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Aidriven = () => {
  return (
    <div className="future-case-container">
       <Helmet>
                <title>AI-Driven Portable Device for Pre-Cancer Screening</title>
                <meta name='description' content='Learn how e-con Systems developed a custom camera for an AI-driven, portable pre-cancer screening device. Discover the innovations and solutions provided.' />
            </Helmet>
      <div className='mainContainer'>
        <div className="future-case-banner">
          <img src={caseimg} alt="Banner" className="w-100" />
          <h1 className="future-case-heading">
            AI-driven and Portable Point-Of-Care Device for Pre-Cancer Screening for a US Medical Device Manufacturer
          </h1>
          <Modelbutton className="future-case-button" text="Download casestudy" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" productName="CaseStudy" docName="point-of-care-device" title="Case Study" />

        </div>

        <h2 className="future-case-sub-heading">Summary of the Solution</h2>
        <p className="future-case-paragraph">
          e-con Systems assisted a leading AI-powered medical device manufacturer in the US by providing a Full HD liquid lens autofocus USB camera for their AI-driven and portable Point-Of-Care Device. We developed a custom camera based on our See3CAM_30 to meet the unique form factor needs while maintaining accurate color reproduction and reduced thermal dissipation.
        </p>

        <h2 className="future-case-sub-heading">Key Challenges Faced by the Client</h2>
        <div className="future-case-image-row">
          <div className="future-case-challenge">
            <img src={aiicon1} alt="Challenge 1" className="future-case-challenge-image" />
            <p>Minimum working distance of 10 to 150 mm</p>
          </div>
          <div className="future-case-challenge">
            <img src={aiicon2} alt="Challenge 2" className="future-case-challenge-image" />
            <p>Android support with full access to the camera controls</p>
          </div>
          <div className="future-case-challenge">
            <img src={aiicon3} alt="Challenge 3" className="future-case-challenge-image" />
            <p>Unique form factor to fit into the application</p>
          </div>
        </div>

        {/* Benefits Section */}
        <h2 className="future-case-benefits-title">Benefits of the Solution</h2>
        <div className="future-case-benefits-container">
          <img src={benifit} alt="Benefits" className="future-case-benefits-image" />
          <div className="future-case-benefits-details">
            <ul>
              <li>Customized liquid lens and lens mount holder to meet the required working distance range</li>
              <li>Android interface support with our proprietary Android SDK and video streaming application WebeeCAM</li>
              <Modelbutton className="future-case-btn" text="Download casestudy" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" productName="CaseStudy" docName="point-of-care-device" title="Case Study"/>

            </ul>
          </div>
        </div>

        {/* Related Case Studies Section */}
        <h2 className="related-case-studies-title">Related Case Studies</h2>
        <div className="related-case-container">
          <div className="related-case-card">
          <Link className="fuCaseIMGLINK" to="/case-studies/dual-ethernet-camera-integration" style={{ textDecoration: "none" }}>
            <img src={dualethernet} alt="Case Study 1" className="related-case-image" />
            </Link>
            <div className="related-case-details">
            <Link className="fuCaseTitleLINK" to="/case-studies/dual-ethernet-camera-integration" style={{ textDecoration: "none" }}>
              <h3>Integrating Dual Ethernet Cameras into Dental Operatory Lights for Improved Functionality</h3>
              </Link>
              <p>Explore how we successfully integrated dual 4K cameras into dental operatory lights for a leading European dental device manufacturer.</p>
              <div className="releated-case-bu">
                <AnimatedButton className="related-case-button" text="Know more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/case-studies/dual-ethernet-camera-integration" />
              </div>
            </div>
          </div>
          
          <div className="related-case-card">
          <Link className="fuCaseIMGLINK" to="/case-studies/4k-dental-loupe-camera-improvement" style={{ textDecoration: "none" }}>
            <img src={relatedCaseImg2} alt="Case Study 2" className="related-case-image" />
            </Link>
            <div className="related-case-details">
            <Link className="fuCaseTitleLINK" to="/case-studies/4k-dental-loupe-camera-improvement" style={{ textDecoration: "none" }}>
              <h3>Improving Dental Documentation using 4k Dental Loupe Camera for a Leading Europe Based Dental Imaging Solutions Provider</h3>
              </Link>
              <p>This case study explores how e-con Systems developed a custom 4K dental loupe camera for a leading European dental imaging solutions provider.</p>
              <div className="releated-case-bu">
                <AnimatedButton className="related-case-button" text="Know more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/case-studies/4k-dental-loupe-camera-improvement" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aidriven;
