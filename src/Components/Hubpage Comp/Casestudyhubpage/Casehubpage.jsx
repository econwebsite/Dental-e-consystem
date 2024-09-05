import React from 'react';
import './casehubpage.css'; // Ensure this CSS file is used
import dentaimg from "../../../assets/Hubpages/hubpgcaseleft.jpg";
import dented1 from "../../../assets/Hubpages/hubcaserigt1.jpg";
import tee2 from "../../../assets/Hubpages/hubcaserigh2.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";

const Casehubpage = () => {
  return (
    <div>
      <div className='casehubpage'>
        <div className='mainContainer'>
          <h1>Case Studies</h1>
          <div className="casepageblog">
            <div className="casehubpage-column casehubpage-left" data-aos="zoom-in-right" data-aos-duration="1000">
              <div className="casehubpage-border-box">
                <img src={dentaimg} alt="Image Description" />
                <h2>The Roadmap of Dual Ethernet Camera Integration in Dental Operatory Lights</h2>
                <p>Explore how we successfully integrated dual 4K cameras into dental operatory lights for a leading European dental device manufacturer. In this case study, we discuss the challenges we faced during the prototyping phase. Read how we customized the camera architecture and implemented other enhanced modifications, such as reduced latency and lens shading correction, to achieve superior image quality in brightly illuminated dental environments.</p>
                <AnimatedButton className="Caseread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
              </div>
            </div>
            <div className="casehubpage-column casehubpage-right" data-aos="zoom-in-left" data-aos-duration="1000">
              <div className="casehubpage-card-row">
                <div className="casehubpage-card">
                  <div className="casehubpage-card-left">
                    <img src={dented1} alt="Card Image 1" />
                  </div>
                  <div className="casehubpage-card-right">
                    <h6>AI-driven and Portable Point-Of-Care Device for Pre-Cancer Screening for a US Medical Device Manufacturer</h6>
                    <p>Read to know how e-con Systems developed a custom camera solution for an AI-driven, portable point-of-care device for pre-cancer screening.</p>
                    <AnimatedButton className="Caseread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
                  </div>
                </div>
              </div>
              <div className="casehubpage-card-row">
                <div className="casehubpage-card">
                  <div className="casehubpage-card-left">
                    <img src={tee2} alt="Card Image 2" />
                  </div>
                  <div className="casehubpage-card-right">
                    <h6>Improving Dental Documentation using 4k Dental Loupe Camera for a Leading Europe Based Dental Imaging Solutions Provider</h6>
                    <p>This case study explores how e-con Systems developed a custom 4K dental loupe camera for a leading European dental imaging solutions provider.</p>
                    <AnimatedButton className="Caseread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
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
