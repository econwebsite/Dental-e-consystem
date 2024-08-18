import React from 'react';
import './Blogspage.css'; // Ensure this is the correct CSS file path
import Dentalimg from "../../../assets/home images/Blogleft.jpg";
import rightimg1 from "../../../assets/home images/Blogright1.jpg";
import rightimg2 from "../../../assets/home images/Blogright2.jpg" ;
import rightimg3 from "../../../assets/home images/Blogright3.jpg" ;
import AnimatedButton from "../../Button comp/AnimatedButton"

const Blogspage = () => {
  return (
    <div className='homeblog-pg'>
      <div className='Home-blogtitle'>
      <h1>Blogs</h1>
      <div className='mainContainer'>
      <div className="homeblog-component-container">
        <div className="homeblog-left-column">
          <div className="homeblog-merged-box" data-aos="zoom-in-right" data-aos-duration="1000">
            <img src={Dentalimg} alt="Full Image" className="homeblog-full-image" />
            <div className="homeblog-box-content">
              <h4>Capturing the Dentists' POV with Dental Loupe Cameras</h4>
              <p>Dental loupe cameras are an everyday tool in dentistry. This blog explores features that enable loupe cameras for precise diagnoses, enhanced patient communication, and seamless documentation. Find out why size, color accuracy, and stability are the deciding factors of the loupe camera performance index.</p>
             <br></br>
             <p>In this blog, we explore the five critical factors in depth: ultra-lightweight design, precise color reproduction, effective heat management, advanced image stabilization, and adaptability to variable lighting conditions. Read on to get a comprehensive view of how these features come together to create a state-of-the-art dental loupe camera that improves dentists' and patient experience.</p>
            <br></br>
           
             <AnimatedButton className="homeblog-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/CapturingDentists"></AnimatedButton>
             </div>
            
          </div>
        </div>

        <div className="homeblog-right-column" data-aos="zoom-in-left" data-aos-duration="1000">
          <div className="homeblog-box">
            <img src={rightimg1} alt="Box 1" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Autofocus vs. Fixed focus: Which Lens to Choose for Intraoral Cameras?</h6>
              {/* <p>Understand how autofocus and fixed focus differentiate the dental imaging quality, device usability, and overall...</p> */}
           <AnimatedButton className="homeblog-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/AutofocusBlog"></AnimatedButton>
            </div>
          </div>
          <div className="homeblog-box">
            <img src={rightimg2} alt="Box 2" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>A Guide to Choosing the Right Dental Intraoral Camera</h6>
              {/* <p>Read to learn about the key features that make a dental intraoral camera ...</p> */}
              <AnimatedButton className="homeblog-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/AGuidTochoose"></AnimatedButton>
            </div>
          </div>
          <div className="homeblog-box">
            <img src={rightimg3} alt="Box 3" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Three Important Parameters in Intra Oral Camera Technology</h6>
              {/* <p>Learn how three important parameters—Depth of Field, Field of View, and Image Quality...</p> */}
              <AnimatedButton className="homeblog-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="Threeimportant"></AnimatedButton>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Blogspage;
