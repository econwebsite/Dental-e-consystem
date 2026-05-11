import React from 'react';
import './ScannerSpecification.css';
import specificaionimg from "../../../../assets/product-images/scanner-Specification-img.png";
import Modelbutton from "../../../Button comp/Modelbutton";

const leftBoxes = [
  { label: 'Scanning technology', value: 'Dual CMOS sensor', bgColor: '#f0feff' },
  { label: 'Scanning speed', value: '30 fps', bgColor: '#def9fc' },
  { label: 'Scan Field ', value: '16 mm × 9 mm', bgColor: '#b8f2ff' },
  { label: 'Accuracy (Full arch)', value: '<20um for single tooth, <50um for full arch', bgColor: '#caf5fc' },
  { label: 'Scan Depth', value: '20mm', bgColor: '#caf5fc' },
  { label: 'Interface', value: 'Wireless/Wired ', bgColor: '#def9fc' },
];
const mechanicalSpecs = [
  { label: 'Light Weight', value: '', bgColor: '#def9fc' },
  { label: 'Ergonomic Design', value: '', bgColor: '#caf5fc' },
  { label: 'IP67', value: '', bgColor: '#b8f2ff' },
  { label: 'Autoclavable Tip', value: '(Removable multiple heads)', bgColor: '#f0feff' },
];

const softwareSpecs = [
  { label: 'Output Formats', value: 'STL / PLY', bgColor: '#caf5fc' },
  { label: 'SDK Support', value: 'Windows / Linux', bgColor: '#def9fc' },
];

const ScannerSpecification = () => {
  return (
    <div className="spec-comp">
      <div className='mainContainer'>
        <div className="spec-container">
          <h1 className="spec-title">Specification and Features</h1>
          <div className="spec-content">
            <div className="spec-leftColumn">
              {leftBoxes.map((box, index) => (
                <div key={index} className="spec-box" data-aos="flip-left" data-aos-duration="1500">
                  <div className="spec-boxContent" style={{ backgroundColor: box.bgColor }}>
                    <div className="spec-innerBox">
                      <p className="spec-label">{box.label}</p>
                      <p className="spec-value">{box.value}</p>
                      {box.des && (
                        <p className="spec-description">{box.des}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="spec-middleColumn">
              <img src={specificaionimg} alt="Scanner Specification" className="spec-image" />
            </div>

            <div className="spec-rightColumn">
              <div className="spec-rightContent">
                {/* Mechanical Section */}
                <div className="spec-categorySection" data-aos="fade-left" data-aos-duration="1500">
                  <div className="spec-categoryHeader">
                    <div className="spec-categoryIndicator" style={{ backgroundColor: '#344ea1' }}></div>
                    <h3 className="spec-categoryName">Mechanical</h3>
                  </div>
                  <div className="spec-itemsList">
                    {mechanicalSpecs.map((spec, index) => (
                      <div key={index} className="spec-specItem" style={{ backgroundColor: spec.bgColor }} data-aos="slide-up" data-aos-duration="1500" data-aos-delay={index * 100}>
                        <div className="spec-itemContent">
                          <p className="spec-itemLabel">{spec.label}</p>
                          {spec.value && <p className="spec-itemValue">{spec.value}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software Section */}
                <div className="spec-categorySection" data-aos="fade-left" data-aos-duration="1500">
                  <div className="spec-categoryHeader">
                    <div className="spec-categoryIndicator" style={{ backgroundColor: '#00aeef' }}></div>
                    <h3 className="spec-categoryName">Software</h3>
                  </div>
                  <div className="spec-itemsList">
                    {softwareSpecs.map((spec, index) => (
                      <div key={index} className="spec-specItem" style={{ backgroundColor: spec.bgColor }} data-aos="slide-up" data-aos-duration="1500" data-aos-delay={(mechanicalSpecs.length + index) * 100}>
                        
                        <div className="spec-itemContent">
                          <p className="spec-itemLabel">{spec.label}</p>
                          {spec.value && <p className="spec-itemValue">{spec.value}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="spec-buttonContainer">
            <Modelbutton className="spec-button" text="Contact Us" backgroundColor="#69ba2f" animationColor="#344ea1" hoverColor="#344ea1" />
          </div>
        </div>
      </div>
  );
};

export default ScannerSpecification;
