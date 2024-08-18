import React from 'react';
import './Hubpageblog.css'; // Import the CSS file for styling
import denta from "../../../assets/Hubpages/Hubpageleft1.jpg";
import Hubcar1 from "../../../assets/Hubpages/Hubright1.jpg";
import Hubcar2 from "../../../assets/Hubpages/Hubright2.jpg";
import Hubcar3 from "../../../assets/Hubpages/Hubright3.jpg";
import Hubcar4 from "../../../assets/Hubpages/Hubright4.jpg";

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
          <img src={denta} alt="Image Description" />
          <h2>Capturing the Dentists' POV with Dental Loupe Cameras</h2>
          <p>Dental loupe cameras are an everyday tool in dentistry. This blog explores features that enable loupe cameras for precise diagnoses, enhanced patient communication, and seamless documentation. Find out why size, color accuracy, and stability are the deciding factors of the loupe camera performance index.</p>
          <p>In this blog, we explore the five critical factors in depth: ultra-lightweight design, precise color reproduction, effective heat management, advanced image stabilization, and adaptability to variable lighting conditions. Read on to get a comprehensive view of how these features come together to create a state-of-the-art dental loupe camera that improves dentists' and patient experience.</p>
          <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/CapturingDentists"></AnimatedButton>

        </div>
      </div>
      <div className="hubblog-column hubblog-right" data-aos="zoom-in-left" data-aos-duration="1000">
        <div className="hubblog-card-row" >
          <div className="hubblog-card">
            <img src={Hubcar1} alt="Card Image 1" />
            <h6>How to Choose the Right Camera for Extraoral Devices?</h6>
            <p>"Read on to learn more about key features like 4K resolution, autofocus capabilities...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/RightforExtraoral"></AnimatedButton>
            </div>
          <div className="hubblog-card">
            <img src={Hubcar2} alt="Card Image 2" />
            <h6>Autofocus vs. Fixed focus: Which Lens to Choose?</h6>
              <p>Understand how autofocus and fixed focus differentiate the dental imaging quality...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/AutofocusBlog"></AnimatedButton>
            </div>
        </div>
        <div className="hubblog-card-row">
          <div className="hubblog-card">
            <img src={Hubcar3} alt="Card Image 1" />
            <h6>A Guide to Choosing the Right Dental Intraoral Camera</h6>
              <p>Read to learn about the key features that make a dental intraoral camera truly...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/Aguidtochoose"></AnimatedButton>
            </div>
          <div className="hubblog-card">
            <img src={Hubcar4} alt="Card Image 2" />
            <h6>Three Important Parameters in Intra Oral Camera Technology</h6>
              <p>Learn how three important parameters—Depth of Field, Field of View, and Image Quality...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/Threeimportant"></AnimatedButton>
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
