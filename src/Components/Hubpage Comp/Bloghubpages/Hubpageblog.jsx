import React from 'react';
import './Hubpageblog.css'; // Import the CSS file for styling
import Aguidtochoose from "../../../assets/Hubpages/A-guidto-choose.jpg"
import CMOS from "../../../assets/Hubpages/the-right-CMOS.jpg"
import Autovsfixed from "../../../assets/Hubpages/Autovsfixed.jpg";
import Capturing from "../../../assets/Hubpages/Capturing-the-Dentists.jpg";
import Threeimp from "../../../assets/Hubpages/Three-Important-Parameters.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton"
import Hubblogcard from '../Bloghubpages/Hubblogcard';

const Hubpageblog = () => {
  return (
    <div>
        
    <div className='hubtot-blog'>
    <div className='mainContainer'>
      <h1>Our Blog</h1>
    <div className="hubpageblog">
      
      <div className="hubblog-column hubblog-left" data-aos="zoom-in-right" data-aos-duration="1000">
        <div className="hubblog-border-box">
          <img src={Aguidtochoose} alt="Image Description" />
          <h2>A Guide to Choosing the Right Dental Intraoral Camera</h2>
          <p>The adoption of intraoral cameras in dental clinics around the globe has enhanced the capabilities of dental professionals. Learn about the key features that make a dental intraoral camera truly effective. From macro imaging capabilities to high-resolution and wide-angle views, understand how these specifications enhance dental diagnostics and patient care.</p>
          <p>Read the blog to learn why factors like depth of field and white balance adjustments are critical in capturing clear, accurate images of the oral cavity, ultimately improving dental practice efficiency.</p>
          <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/Aguidtochoose"></AnimatedButton>

        </div>
      </div>
      <div className="hubblog-column hubblog-right" data-aos="zoom-in-left" data-aos-duration="1000">
        <div className="hubblog-card-row" >
        
          <div className="hubblog-card">
            <img src={Autovsfixed} alt="Card Image 2" />
            <h6>Autofocus vs. Fixed focus: Which Lens to Choose?</h6>
              <p>Understand how autofocus and fixed focus differentiate the dental imaging quality...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/AutofocusBlog"></AnimatedButton>
            </div>
            <div className="hubblog-card">
            <img src={CMOS} alt="Card Image 1" />
            <h6>Choosing the right CMOS cameras for Extraoral Imaging</h6>
            <p>"Read on to learn more about key features like 4K resolution, autofocus capabilities...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/RightforExtraoral"></AnimatedButton>
            </div>
        </div>
        <div className="hubblog-card-row">
         
          <div className="hubblog-card">
            <img src={Threeimp} alt="Card Image 2" />
            <h6>Three Important Parameters in Intra Oral Camera Technology</h6>
              <p>Learn how three important parameters—Depth of Field, Field of View, and Image Quality...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/Threeimportant"></AnimatedButton>
            </div>
            <div className="hubblog-card">
            <img src={Capturing} alt="Card Image 1" />
            <h6>Capturing the Dentists’ POV with Dental Loupe Cameras</h6>
              <p>This blog explores features that enable loupe cameras for precise diagnoses. Find out why size...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/CapturingDentists"></AnimatedButton>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <Hubblogcard/>
    </div>
  );
};

export default Hubpageblog;
