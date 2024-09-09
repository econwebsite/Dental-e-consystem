import React from 'react';
import './AboutUs.css';
import Intraoral from '../../assets/home images/about-intraoral.png';
import loupe from '../../assets/home images/about-dentloupe.png';
import surgical from '../../assets/home images/about-surgical-lights.png';
import Aboutboderbox from './Aboutboder/AboutBoderbox';
import ce from '../../assets/home images/certificates-01.png';
import fc from '../../assets/home images/certificates-02.png';
import rohs from '../../assets/home images/certificates-03.png';
import tic from '../../assets/home images/certificates-04.png';



export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="mainContainer">
        <div className="aboutus-header-image"></div>
        <Aboutboderbox />
        <div className="aboutus-content">
          <div className="aboutus-left-content">
            <p className="aboutus-heading">About e-con Systems Dental</p>
            <p className="aboutus-paragraph">
              e-con Systems Dental is a specialized division focused on providing Original Design Manufacturing (ODM) solutions for dental imaging. At e-con Systems – Dental, we leverage our extensive expertise to meet the unique needs of the dental industry. Having collaborated with leading dental device manufacturers for more than 20 years, from ideation to market launch, we understand the challenges and intricacies of dental imaging. To address these challenges, we offer comprehensive ODM designs for dental imaging solutions, including intraoral cameras, extraoral cameras, and dental loupe cameras. Our solutions allow manufacturers to seamlessly integrate and rebrand these products into their portfolios, ensuring high-quality imaging with reduced time to market and cost efficiency.
            </p>
          </div>
          <div className="aboutus-right-images">
            <h4 className="aboutus-heading2">We’ve helped customers with</h4>
            <div className="aboutus-image-text-pair">
              <img src={Intraoral} alt="Intraoral Camera" className="aboutus-img-thumbnail" />
              <p>Developing an AI-driven and Portable Oral Pre-Cancer Screening Device</p>
            </div>
            <div className="aboutus-image-text-pair">
              <img src={loupe} alt="Dental Loupe" className="aboutus-img-thumbnail" />
              <p>Formulated the integration of our cameras into the dental surgical lights</p>
            </div>
            <div className="aboutus-image-text-pair">
              <img src={surgical} alt="Surgical Lights" className="aboutus-img-thumbnail" />
              <p>Designing a lightweight and low-heat Dental Loupe Camera Solution</p>
            </div>
          </div>
        </div>

        <div className="aboutus-econ-systems">
          <p className="aboutus-heading">About e-con Systems</p>
          <p className="aboutus-paragraph">
            Established in 2003, e-con Systems has grown into a leading OEM camera solution provider with a wide global footprint. We provide end-to-end camera solutions like MIPI camera modules, GMSL cameras, USB 3.1 Gen 1 cameras, stereo cameras, Time of Flight cameras, and more. Over the years, we have reimagined how they are used in applications such as retail, medical, industrial, agriculture, smart city, etc.
          </p>
          <p className="aboutus-paragraph">
            We are also powered by a strong partner ecosystem, providing end-to-end vision solutions with sensor partners, ISP partners, carrier board partners, and more.
          </p>
          <p className="aboutus-paragraph">
            So far, we have built 350+ product solutions - shipping over 2 million cameras to the United States, Europe, Japan, South Korea, and many more countries.
          </p>
          <p className="aboutus-paragraph">
            To know more about e-con Systems <a href="https://www.e-consystems.com/aboutus.asp" target="_blank" rel="noopener noreferrer">click here</a>
          </p>
        </div>

        <div className="aboutus-econ-systems">
          <p className="aboutus-heading">Quality policy</p>
          <p className="aboutus-paragraph">
            e-con Systems® designs, manufactures, and delivers quality products to its customers and strives consistently to excel through continual improvement.
          </p>
          <p className="aboutus-paragraph">
            Our camera products provide lifetime support to your end applications with state-of-the-art manufacturing, design, and quality processes in place. We also extend a 3-year warranty period on all our camera products, which speaks for our commitment to ensuring product quality and standing by our customers.
          </p>
          <p className="aboutus-paragraph">
            As an ISO 9001:2015 certified company, e-con Systems® is aware of the need for regulatory compliance with regards to its products sold globally. Please visit our Product Compliance Declaration for more details.
          </p>
          <p className="aboutus-paragraph">
            Following are the certifications and quality standards e-con follows:
          </p>
<br></br>
          <div className="aboutus-image-row">
            <div className="aboutus-image-wrapper">
              <img src={ce} alt="Certification CE" />
            </div>
            <div className="aboutus-image-wrapper">
              <img src={fc} alt="Certification FC" />
            </div>
            <div className="aboutus-image-wrapper">
              <img src={rohs} alt="Certification CE" />
            </div>
            <div className="aboutus-image-wrapper">
              <img src={tic} alt="Certification FC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
