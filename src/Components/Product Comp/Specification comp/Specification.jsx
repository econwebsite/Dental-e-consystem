import React from 'react';
import './Specification.css'; // Import CSS for styling
import specificaionimg from "../../../assets/Product images/Specimg.png";
import AnimatedButton from "../../Button comp/AnimatedButton"
const leftBoxes = [
  { label: 'Image Resolution', value: 'Full HD', bgColor: '#f0feff' },
  { label: 'Sensor Size', value: '1/4.2', bgColor: '#def9fc' },
  { label: 'Focus Type', value: 'Fixed Focus', bgColor: '#b8f2ff' },
  { label: 'Minimum Working Distance', value: '5mm or even less', bgColor: '#caf5fc' },
  { label: 'Image Processing', value: 'Inbuilt ISP', bgColor: '#caf5fc' },
  { label: 'Supported OS', value: 'Windows, Linux, MAC', bgColor: '#def9fc' },
];

const rightBoxes = [
  { label: 'Frame Rate', value: '30 fps', bgColor: '#def9fc' },
  { label: 'Interface', value: 'Plug & play USB 2.0 & USB3.0', bgColor: '#caf5fc' },
  { label: 'Angle of View (FOV)', value: '90 deg', bgColor: '#caf5fc' },
  { label: 'Depth of fields (DOF)', value: '5-70 mm', bgColor: '#b8f2ff' },
  { label: 'Video / Image Capture', value: 'External Button', bgColor: '#def9fc' },
  { label: 'Output Format', value: 'MJPEG & YUV', bgColor: '#f0feff' },
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
              <div key={index} className="spec-box">
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
              <div key={index} className="spec-box">
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
          <AnimatedButton className="spec-button" text="Download Tech Document" backgroundColor="#69ba2f" animationColor="#344ea1" hoverColor="#344ea1" />

        </div>
      </div>
    </div>
    </div>
  );
};

export default Specification;
