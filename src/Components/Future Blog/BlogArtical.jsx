import React from 'react';
import './BlogArtical.css'; // Import the CSS file
import Balajiimg from "../../assets/Future Blog/Balajiimg (2).jpg"
import AnimatedButton from "../Button comp/AnimatedButton"
const BlogArtical = () => {
  return (
   
    <div className="blogArtical-Total">
      
      <div className="Artical-paragraphs">
        <p>If you need assistance with lens selection or integrating camera solutions into any of your medical or life sciences devices</p>
        <p>please write to <span className='mail-color'>camerasolutions@e-consystems.com</span></p>
      </div>
      <div className="Artical-person">
        <div className="Articalleft-side">
          <img src={Balajiimg} alt="Person" className="Articalperson-photo" />
          <p>Balaji S</p>
          <p>Product Manager</p>
        </div>
        <div className="Articalright-side">
          <p>
            Balaji is a camera expert with 18+ years of experience in embedded product design, camera solutions, and product development. In e-con Systems, he has built numerous camera solutions in the field of ophthalmology, laboratory equipment, dentistry, assistive technology, dermatology, and more. He has played an integral part in helping many customers build their products by integrating the right vision technology into them.
          </p>
        </div>
      </div>
      <div className="Articalnotification-box">
        <h3>Get notified of new articles</h3>
        <br></br>
        <p>Subscribe to our blog to be noticed on new post & product release.</p>
        <div className="Articalsubscribe-row">
          <input type="email" placeholder="Your email address" className="Artical-inputemail" />
          <AnimatedButton className="Articalknow-button" text="Know more" backgroundColor="#003873" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>

        </div>
      </div>
      </div>
  );
};

export default BlogArtical;
