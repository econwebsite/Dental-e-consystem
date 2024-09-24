import React from "react";
import './Futurecase.css';
import caseimg from "../../assets/Futurecasestudy/sports-analytics-banner-en.jpg";
import caseicon from "../../assets/Futurecasestudy/caseicons.png";
import relatedCaseImg1 from "../../assets/Futurecasestudy/AI-driven.jpg";
import relatedCaseImg2 from "../../assets/Futurecasestudy/Improving-Dental.jpg";
import Modelbutton from "../Button comp/Modelbutton";
import AnimatedButton from "../Button comp/AnimatedButton";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Roadmapofdual = () => {
  return (
    <div className="future-case-container">
       <Helmet>
                <title>Dual Ethernet Camera Integration in Dental Lights</title>
                <meta name='description' content='Discover how e-con Systems integrated dual 4K cameras into dental operatory lights. Learn about challenges, customizations, and enhancements for superior imaging.' />
            </Helmet>
      <div className='mainContainer'>
        <div className="future-case-banner">
          <img src={caseimg} alt="Banner" className="w-100" />
          <h1 className="future-case-heading">
            The Roadmap of Dual Ethernet Camera Integration in Dental Operatory Lights</h1>
          <Modelbutton className="future-case-button" text="Download casestudy" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" productName="CaseStudy" docName="integrating-of-dual-ethernet-camera" title="Case Study" />

        </div>

        <h2 className="future-case-sub-heading">Summary of the Solution</h2>
        <p className="future-case-paragraph">
          e-con Systems solution for a European dental device manufacturer to integrate a two-camera system with 4k resolution and a frame rate of 30 fps onto their dental operating light. We customized the camera architecture to fit the client’s device requirements. A dual camera solution with HDR capabilities, low latency, and a custom lens was the end product.      </p>

        <h2 className="future-case-sub-heading">Key Challenges Faced by the Client</h2>
        <div className="future-case-image-row">
          <div className="future-case-challenge">
            <img src={caseicon} alt="Challenge 1" className="future-case-challenge-image" />
            <p>Attaining faster data transmission with low latency</p>
          </div>
          <div className="future-case-challenge">
            <img src={caseicon} alt="Challenge 2" className="future-case-challenge-image" />
            <p>Overcoming artifacts caused by bright illumination in dental clinic environments</p>
          </div>
          <div className="future-case-challenge">
            <img src={caseicon} alt="Challenge 3" className="future-case-challenge-image" />
            <p>Customization of the camera architecture to increase the ease of use of the system while switching between the cameras with uninterrupted data flow</p>
          </div>
        </div>

        {/* Benefits Section */}
        <h2 className="future-case-benefits-title">Benefits of the Solution</h2>
        <div className="future-case-benefits-container">
          <img src={caseimg} alt="Benefits" className="future-case-benefits-image" />
          <div className="future-case-benefits-details">
            <ul>
              <li>Introduced additional processing algorithms to streamline the encoding and decoding processes, helping reduce the latency</li>
              <li>We tackled lens compatibility and uneven illumination with lens shading correction. Correction maps were applied to each image captured by the camera to regulate the brightness and color variations across frames, enabling uniform vignette-free image capture.</li>

              <Modelbutton className="future-case-btn" text="Download casestudy" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" productName="CaseStudy" docName="integrating-of-dual-ethernet-camera" title="Case Study" />

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

export default Roadmapofdual;
