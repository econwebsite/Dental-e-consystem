import React from 'react';
import './Keyhighlights.css';
import KeyHighlights1 from "../../../assets/Product images/KeyHighlights1.png";
import KeyHighlights2 from "../../../assets/Product images/KeyHighlights2.png";
import KeyHighlights3 from "../../../assets/Product images/KeyHighlights3.png";
import KeyHighlights4 from "../../../assets/Product images/KeyHighlights4.png";
import KeyHighlights5 from "../../../assets/Product images/KeyHighlights5.png";
import KeyHighlights6 from "../../../assets/Product images/KeyHighlights6.png";

const KeyHighlights = () => (
    <div className='key-highlights-total'>
                      <div className='mainContainer'>
        <div className='key-highlights-border-rectang'>
            <h2 className="key-highlights-title-center">Key Highlights</h2>
            <div className="key-highlights-rectangle" data-aos="zoom-in" data-aos-duration="1100">
                <div className="key-highlights-rectangle-box">
                    <div className="key-highlights-small-rectangle1">
                        <img src={KeyHighlights1} alt="Superior quality images" className="key-highlights-small-image" />
                    </div>
                    <div className="key-highlights-rectangle-content">
                        <h4>Superior quality images</h4>
                        <p>Delivers crystal clear images for accurate diagnosis and patient communication.</p>
                    </div>
                </div>

                <div className="key-highlights-rectangle-box">
                    <div className="key-highlights-small-rectangle2">
                        <img src={KeyHighlights2} alt="Plug and Play" className="key-highlights-small-image" />
                    </div>
                    <div className="key-highlights-rectangle-content">
                        <h4>Plug and Play</h4>
                        <p>Easy setup with minimal installation time, enhancing workflow efficiency.</p>
                    </div>
                </div>

                <div className="key-highlights-rectangle-box">
                    <div className="key-highlights-small-rectangle3">
                        <img src={KeyHighlights3} alt="Dental Software Compatibility" className="key-highlights-small-image" />
                    </div>
                    <div className="key-highlights-rectangle-content">
                        <h4>Dental Software Compatibility</h4>
                        <p>Delivers crystal-clear images for accurate diagnosis and patient communication.</p>
                    </div>
                </div>
            </div>

            <div className="key-highlights-rectangle" data-aos="zoom-in" data-aos-duration="1300">
                <div className="key-highlights-rectangle-box">
                    <div className="key-highlights-small-rectangle4">
                        <img src={KeyHighlights4} alt="Example 1" className="key-highlights-small-image" />
                    </div>
                    <div className="key-highlights-rectangle-content">
                        <h4>Fully Customizable</h4>
                        <p>Options to tailor the camera features to specific brand requirements and preferences.</p>
                    </div>
                </div>

                <div className="key-highlights-rectangle-box">
                    <div className="key-highlights-small-rectangle5">
                        <img src={KeyHighlights5} alt="Example 2" className="key-highlights-small-image" />
                    </div>
                    <div className="key-highlights-rectangle-content">
                        <h4>Ergonomics</h4>
                        <p>Designed for comfort and ease of use, minimizing user fatigue during long procedures.</p>
                    </div>
                </div>

                <div className="key-highlights-rectangle-box">
                    <div className="key-highlights-small-rectangle6">
                        <img src={KeyHighlights6} alt="Example 3" className="key-highlights-small-image" />
                    </div>
                    <div className="key-highlights-rectangle-content">
                        <h4>Warranty</h4>
                        <p>Offers peace of mind with a comprehensive warranty and reliable customer support.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
);

export default KeyHighlights;
