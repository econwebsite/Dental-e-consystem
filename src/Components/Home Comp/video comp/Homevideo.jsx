import React, { useState } from 'react';
import './Homevideo.css';
import Vediothumbnail from "../../../assets/home images/Tumbnail.jpg"; // Correct path to your image
import FsLightbox from "fslightbox-react";

function Dentalvideopg() {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="tot-denvedio">
      <div className='mainContainer'>

        <h2>Videos</h2>
        <div className="video-title-container">
          <div className="home-thumbnail">
            <img
              src={Vediothumbnail} 
              alt="Left Thumbnail"
              className="homeside-img"
              onClick={() => setToggler(!toggler)}
            />
          </div>

          {/* <div className="home-thumbnail">
            <img
              src={Vediothumbnail}
              alt="Right Thumbnail"
              className="homeside-img"
              onClick={() => setToggler(!toggler)}
            />
          </div> */}

          <FsLightbox
            toggler={toggler}
            sources={[
              "https://www.youtube.com/embed/wPdvM_xv-tg?autoplay=1" // Replace with your actual video URL
            ]}
          />
        </div>
        </div>
      </div>
    </>
  );
}

export default Dentalvideopg;
