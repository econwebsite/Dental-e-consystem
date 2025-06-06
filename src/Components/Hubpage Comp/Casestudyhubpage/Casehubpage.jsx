import React from 'react';
import './casehubpage.css'; 
import ethernetCameras from "../../../assets/Hubpages/integrating-dual-ethernet-cameras.jpg";
import AIdriven from "../../../assets/Hubpages/AI-driven.jpg";
import Improving from "../../../assets/Hubpages/Improving-Dental.jpg";
import Modelbutton from "../../Button comp/Modelbutton";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Casehubpage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
<title>Dental Case Studies</title>
<meta name='description' content='Explore our case studies showcasing successful dental imaging solutions by e-con Systems. Discover how our innovations enhance dental practice efficiency.' />
</Helmet>
      <div className='casehubpage'>
        <div className='mainContainer'>
          <h1>Case Studies</h1>
          <div className="casepageblog">
            <div className="casehubpage-column casehubpage-left" data-aos="zoom-in-right" data-aos-duration="1000">
              <div className="casehubpage-border-box">
              
                <img src={ethernetCameras} alt="Image Description" />
                
                <h2>Integrating Dual Ethernet Cameras into Dental Operatory Lights for Improved Functionality</h2>
                
                <p>Explore how we successfully integrated dual 4K cameras into dental operatory lights for a leading European dental device manufacturer. In this case study, we discuss the challenges we faced during the prototyping phase. Read how we customized the camera architecture and implemented other enhanced modifications, such as reduced latency and lens shading correction, to achieve superior image quality in brightly illuminated dental environments.</p>
                <Modelbutton className="casestudy-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" productName="CaseStudy" docName="e-con_integrating-dual-ethernet-cameras" title="Case Study"/>
              </div>
            </div>
            <div className="casehubpage-column casehubpage-right" data-aos="zoom-in-left" data-aos-duration="1000">
              <div className="casehubpage-card-row">
                <div className="casehubpage-card">
                  <div className="casehubpage-card-left">
                  
                    <img src={AIdriven} alt="Card Image 1" />
                  </div>
                  <div className="casehubpage-card-right">
                    <h6>AI-driven and Portable Point-Of-Care Device for Pre-Cancer Screening for a US Medical Device Manufacturer</h6>
                    <p>Read to know how e-con Systems developed a custom camera solution for an AI-driven, portable point-of-care device for pre-cancer screening.</p>
                    <Modelbutton className="casestudy-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" productName="CaseStudy" docName="e-con_ai-driven-and-portable-point-of-care" title="Case Study"/>
                  </div>
                </div>
              </div>
              <div className="casehubpage-card-row">
                <div className="casehubpage-card">
                  <div className="casehubpage-card-left">
                    <img src={Improving} alt="Card Image 2" />
                  </div>
                  <div className="casehubpage-card-right">
                    <h6>Improving Dental Documentation using 4k Dental Loupe Camera for a Leading Europe Based Dental Imaging Solutions Provider</h6>
                    <p>This case study explores how e-con Systems developed a custom 4K dental loupe camera for a leading European dental imaging solutions provider.</p>
                    <Modelbutton className="casestudy-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" productName="CaseStudy" docName="e-con_improving-dental-documentation-using-4k" title="Case Study"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casehubpage;
