import React, { useState } from 'react';
import './Productboderbox.css';
import Boderimg1 from "../../../assets/Product images/Boderimg1.png";
import Boderimg2 from "../../../assets/Product images/Boderimg2.png";
import Boderimg3 from "../../../assets/Product images/Boderimg3.png";
// import Vediothumbnail from "../../../assets/home images/Tumbnail.jpg"; 
import Vediothumbnail2 from "../../../assets/Product images/boderthumb2.jpg"; 

import FsLightbox from "fslightbox-react";

const Productboderbox = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className='Productboderbox-Total'>
                    <div className='mainContainer'>

      <div className="Productboderbox-container">
        <h1>Why choose our intraOral camera?</h1>
        <p className="Productboderbox-description">
        With over 20 years of camera engineering experience, we’ve perfected a solution that meets and exceeds the industry's highest standards:</p>
        <div className="Productboderbox-content">
          <div className="Productboderbox-left-column">
            <h4>Full HD resolution</h4>
           <p>The high pixel density ensures that images remain crisp and detailed even when zoomed in. This clarity allows identification of even the smallest imperfections, such as micro-fractures and early-stage lesions.</p>
            <h4>5mm – 70mm Depth of Field</h4>
            <p>The camera integrates a custom-designed fixed focus lens, engineered with high-quality materials to minimize distortion and aberrations. Optimum aperture ensures image clarity throughout the focal range.</p>
          <h4>Image Quality</h4>
          <p>The on-board signal processor chip provides accurate color reproduction. Image quality is enhanced by reducing noise and increasing contrast. Multiple imaging modes provides efficient clinical diagnosis.</p>
          </div>
          <div className="Productboderbox-right-column">
          <div className="product-thumbnail">
              <img
                src={Vediothumbnail2}
                alt="Right Thumbnail"
                className="productside-img"
                onClick={() => setToggler(!toggler)}
              />
            </div>

            <FsLightbox
              toggler={toggler}
              sources={[
                "https://www.youtube.com/embed/wPdvM_xv-tg?autoplay=1"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Productboderbox;
