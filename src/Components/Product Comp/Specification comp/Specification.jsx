import React from 'react';
import './Specification.css'; // Import CSS for styling
import specificaionimg from "../../../assets/Product images/Specimg.png";
import Modelbutton from "../../Button comp/Modelbutton"
const leftBoxes = [
  { label: 'Resolution', value: '1920 x 1080', bgColor: '#f0feff' },
  { label: 'Frame Rate', value: '30 fps', bgColor: '#def9fc' },
  { label: 'Interface', value: 'Plug and play USB 2.0 and USB 3.0', bgColor: '#b8f2ff' },
  { label: 'Output Format', value: 'MJPEG and YUV', bgColor: '#caf5fc' },
  { label: 'Warranty', value: '3 Years', bgColor: '#caf5fc' },
  { label: 'Regulatory standards', value: 'CE, FCC, ROHS Reach', bgColor: '#def9fc' },
];

const rightBoxes = [
  { label: 'Depth of Field (DOF)', value: '5 – 70 mm', bgColor: '#def9fc' },
  { label: 'Focus Type', value: 'Fixed Focus', bgColor: '#caf5fc' },
  { label: 'Angle of View (FOV)', value: '90 deg', bgColor: '#caf5fc' },
  { label: 'Illumination', value: '6 LEDS with adjustable brightness', bgColor: '#b8f2ff' },
  { label: 'LEDS', value: 'Reduced glare and reflection', bgColor: '#def9fc' },
  { label: 'Housing', value: 'Scratch proof and sterilizable', bgColor: '#f0feff' },
];

const Specification = () => {
  return (
    <div className="spec-comp">
                    <div className='mainContainer'>
      <div className="spec-container">
        <h1 className="spec-title">Specification and Features</h1>
        <div className="spec-content">
          <div className="spec-leftColumn">
            {/* Left Column */}
            {leftBoxes.map((box, index) => (
              <div key={index} className="spec-box" data-aos="flip-left" data-aos-duration="1500">
                <div className="spec-boxContent" style={{ backgroundColor: box.bgColor }}>
                  <div className="spec-innerBox">
                    <p className="spec-label">{box.label}</p>
                    <p className="spec-value">{box.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="spec-middleColumn">
            {/* Middle Column (Image) */}
            <img src={specificaionimg} alt="Specification" className="spec-image" />
          </div>

          <div className="spec-rightColumn">
            {/* Right Column */}
            {rightBoxes.map((box, index) => (
              <div key={index} className="spec-box" data-aos="flip-left" data-aos-duration="1500">
                <div className="spec-boxContent" style={{ backgroundColor: box.bgColor }}>
                  <div className="spec-innerBox">
                    <p className="spec-label">{box.label}</p>
                    <p className="spec-value">{box.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Button Section */}
        <div className="spec-buttonContainer">
          {/* <AnimatedButton className="spec-button" text="Download Tech Document" backgroundColor="#69ba2f" animationColor="#344ea1" hoverColor="#344ea1" /> */}
          <Modelbutton className="spec-button" text="Contact Us" backgroundColor="#69ba2f" animationColor="#344ea1" hoverColor="#344ea1"/>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Specification;
