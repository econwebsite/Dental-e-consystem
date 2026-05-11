import React from 'react';
import './ScannerBorderBox.css';
import Boderimg1 from "../../../../assets/product-images/high-scan-speed.png";
import Boderimg2 from "../../../../assets/product-images/scan-accuracy-icon.png";
import Boderimg3 from "../../../../assets/product-images/true-color-scanning-icon.png";
import Boderimg4 from "../../../../assets/product-images/extended-dfov-icon.png";
import Boderimg5 from "../../../../assets/product-images/compact-design-icon.png";
import Boderimg6 from "../../../../assets/product-images/image-quality-icon.png";

const ScannerBorderBox = () => {

  return (
    <div className='Productboderbox-Total'>
      <div className='mainContainer'>
        <div className="Productboderbox-container">
          <h1>Key Features</h1>
          {/* <p className="Productboderbox-description">
            With over 20 years of camera engineering experience, we've perfected a solution that meets and exceeds the industry's highest standards:
          </p> */}

          <div className="Productboderbox-content">
            <div className="Productboderbox-left-column">
              <div className='Productboder-imges'>
                <h4><img src={Boderimg1} className='pro-Boderimg' />High Scanning Speed</h4>
              </div>
              <p>Engineered for rapid, continuous capture that completes full arch scans in record time, reducing chair time and keeping clinical workflows moving effortlessly.</p>

              <div className='Productboder-imges'>
                <h4><img src={Boderimg2} className='pro-Boderimg' />Scan Accuracy & Precision</h4>
              </div>
              <p>Exceptional accuracy across every case and indication ensures fewer remakes, better-fitting restorations, and complete confidence in every digital impression from first scan to final fit.</p>

              <div className='Productboder-imges'>
                <h4><img src={Boderimg3} className='pro-Boderimg' />True Color Scanning</h4>
              </div>
              <p>True-to-life color rendering in every scan enables precise shade matching, richer soft tissue detail, and more compelling patient communication at chairside.</p>
            </div>

            <div className="Productboderbox-right-column">
              <div className='Productboder-imges'>
                <h4><img src={Boderimg4} className='pro-Boderimg' />Extended Depth of Field</h4>
              </div>
              <p>Consistent, high-quality capture even in deep pockets, narrow margins, and challenging posterior regions ensures fewer rescans and complete data from the very first pass.</p>

              <div className='Productboder-imges'>
                <h4><img src={Boderimg5} className='pro-Boderimg' />Compact & Ergonomic Design</h4>
              </div>
              <p>A slim, balanced grip reduces operator fatigue, while the fully sterilizable autoclavable tip and IP67-rated dust and water resistance ensure reliable performance in any clinical environment.</p>

              {/* <div className='Productboder-imges'>
                <h4><img src={Boderimg6} className='pro-Boderimg' />Advanced Data Export</h4>
              </div>
              <p>Seamless integration with leading dental software platforms enables quick data export, streamlined workflows, and enhanced patient collaboration with intuitive reporting features.</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScannerBorderBox;
