import React from 'react';
import './Homevideo.css';
import AnimatedButton from "../../Button comp/AnimatedButton"
function Dentalvideopg() {
  return (
    
    <div className="mainContainer">
    <div className="Dental-Video-total">
      <div className="dental-video-left">
        <div className="dental-videos-content">
          <h1>Videos</h1>
          <p>We deployed a high-quality camera with iHDR for<br />dentistry to help them motivate and educate<br /> dental patients and students.</p>
          <AnimatedButton className="know-more-button" text="Know more" backgroundColor="#00aeef" animationColor="#003873" hoverColor="#003873"></AnimatedButton>

        </div>
      </div>
      <div className="dental-video-right">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/P6ky60BBwCk?si=PoqfPNqgWKdEZwPg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  );
}

export default Dentalvideopg;
