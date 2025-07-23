import React, { useState } from 'react';
import './Homevideo.css';
import Vediothumbnail1 from "../../../assets/home images/thumbnail.jpg";
import Vediothumbnail2 from "../../../assets/home images/thumbnail2.jpg";
import FsLightbox from "fslightbox-react";

function Dentalvideopg() {
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleVideoClick = (index) => {
    setSlideIndex(index);
    setToggler(!toggler);
  };

  return (
    <>
      <div className="tot-denvedio">
        <div className='mainContainer'>
          <h2>Videos</h2>
          <div className="video-title-container">
            <div className="home-thumbnail" onClick={() => handleVideoClick(0)}>
              <img
                src={Vediothumbnail1}
                alt="Video 1"
                className="homeside-img"
              />
            </div>

            <div className="home-thumbnail" onClick={() => handleVideoClick(1)}>
              <img
                src={Vediothumbnail2}
                alt="Video 2"
                className="homeside-img"
              />
            </div>

            <FsLightbox
              toggler={toggler}
              sources={[
                "https://www.youtube.com/embed/qfmwMkSypo4?autoplay=1",
                "https://www.youtube.com/embed/O35WqKAkJZo?autoplay=1"
              ]}
              slide={slideIndex + 1}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dentalvideopg;
