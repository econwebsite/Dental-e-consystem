import React, { useState } from 'react';
import './Productboderbox.css';
import Boderimg1 from "../../../assets/Product images/produc-hd.png";
import Boderimg2 from "../../../assets/Product images/product-photo.png";
import Boderimg3 from "../../../assets/Product images/product-gallary.png";
import Vediothumbnail2 from "../../../assets/Product images/Tumbnail.jpg"; 

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
            <div className='Productboder-imges'>
            <h4><img src={Boderimg1} className='pro-Boderimg'></img>Full HD resolution</h4>
            </div>
           <p>The high pixel density ensures that images remain crisp and detailed even when zoomed in. This clarity allows identification of even the smallest imperfections, such as micro-fractures and early-stage lesions.</p>
            <div className='Productboder-imges'>
            <h4><img src={Boderimg2} className='pro-Boderimg'></img>5mm – 70mm Depth of Field</h4>
            </div>
            <p>The camera integrates a custom-designed fixed focus lens, engineered with high-quality materials to minimize distortion and aberrations. Optimum aperture ensures image clarity throughout the focal range.</p>
          <div className='Productboder-imges'>
          <h4><img src={Boderimg3} className='pro-Boderimg'></img>Image Quality</h4>
          </div>
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
