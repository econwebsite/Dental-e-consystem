import React from 'react';
import './Hubpageblog.css'; // Import the CSS file for styling
import Aguidtochoose from "../../../assets/Hubpages/A-guidto-choose.jpg"
import CMOS from "../../../assets/Hubpages/the-right-CMOS.jpg"
import Autovsfixed from "../../../assets/Hubpages/Autovsfixed.jpg";
import Capturing from "../../../assets/Hubpages/Capturing-the-Dentists.jpg";
import Threeimp from "../../../assets/Hubpages/Three-Important-Parameters.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton"
import Hubblogcard from '../Bloghubpages/Hubblogcard';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Hubpageblog = () => {

  return (
    <div>
        <Helmet>
<title>Dental Camera Insights: Latest Blog Articles & Updates</title>
<meta name='description' content='Discover the latest insights on dental cameras with our blog hub. Explore expert articles, updates, and tips to stay informed about the latest advancements in dental imaging.' />
</Helmet>
    <div className='hubtot-blog'>
    <div className='mainContainer'>
      <h1>Our Blog</h1>

  <div className="hubpageblog hubfeature-row" data-aos="fade-up" data-aos-duration="1000">
      <div className="hubfeature-card">
        <div className="hubfeature-body">
          <span className="hubfeature-tag">Featured</span>
          <Link className="HUBcardTitleLink" to="/blogs/whats-new-in-densicam" style={{ textDecoration: "none" }}>
            <h2>What's New in DensiCAM? A Closer Look at Our Enhanced Full HD Intraoral Camera</h2>
          </Link>
          <p>At e-con Systems, we continuously work to improve our dental imaging solutions based on evolving customer requirements and application needs. As part of these efforts, DensiCAM, our intraoral camera, has undergone several improvements to its physical design, imaging capabilities, and user interface. 
</p>
          <p className="hubfeature-meta">By Bharath Kumar <span aria-hidden="true">&bull;</span> 8 min read</p>
          <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/whats-new-in-densicam"></AnimatedButton>
        </div>
      </div>
    </div>
      
    <div className="hubpageblog">
      <div className="hubblog-column hubblog-left" data-aos="zoom-in-right" data-aos-duration="1000">
        <div className="hubblog-border-box">
        <Link className="HUBcardImgLink" to="/blogs/choosing-best-dental-intraoral-camera" style={{ textDecoration: "none" }}>
          <img src={Aguidtochoose} alt="Choosing the Right Dental Intraoral" />
          </Link>
          <Link className="HUBcardTitleLink" to="/blogs/choosing-best-dental-intraoral-camera" style={{ textDecoration: "none" }}>
          <h2>A Guide to Choosing the Right Dental Intraoral Camera</h2>
          </Link>
          <p>The adoption of intraoral cameras in dental clinics around the globe has enhanced the capabilities of dental professionals. Learn about the key features that make a dental intraoral camera truly effective. From macro imaging capabilities to high-resolution and wide-angle views, understand how these specifications enhance dental diagnostics and patient care.</p>
          <p>Read the blog to learn why factors like depth of field and white balance adjustments are critical in capturing clear, accurate images of the oral cavity, ultimately improving dental practice efficiency.</p>
          <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/choosing-best-dental-intraoral-camera"></AnimatedButton>

        </div>
      </div>
      <div className="hubblog-column hubblog-right" data-aos="zoom-in-left" data-aos-duration="1000">
        <div className="hubblog-card-row" >
          <div className="hubblog-card">
          <Link className="HUBcardImgLink" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" style={{ textDecoration: "none" }}>
            <img src={Autovsfixed} alt="Autofocus vs. Fixed focus" />
            </Link>
            <Link className="HUBcardTitleLink" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras" style={{ textDecoration: "none" }}>
            <h6>Autofocus vs. Fixed focus: Which Lens to Choose?</h6>
            </Link>
              <p>Understand how autofocus and fixed focus differentiate the dental imaging quality...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/autofocus-vs-fixed-focus-lenses-for-intraoral-cameras"></AnimatedButton>
            </div>
            <div className="hubblog-card">
            <Link className="HUBcardImgLink" to="/blogs/choosing-the-right-cmos-cameras-for-extraoral-imaging" style={{ textDecoration: "none" }}>
            <img src={CMOS} alt="Choosing the right CMOS cameras" />
            </Link>
            <Link className="HUBcardTitleLink" to="/blogs/choosing-the-right-cmos-cameras-for-extraoral-imaging" style={{ textDecoration: "none" }}>
            <h6>Choosing the right CMOS cameras for Extraoral Imaging</h6>
            </Link>
            <p>"Read on to learn more about key features like 4K resolution, autofocus capabilities...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/choosing-the-right-cmos-cameras-for-extraoral-imaging"></AnimatedButton>
            </div>
        </div>
        <div className="hubblog-card-row">
         
          <div className="hubblog-card">
          <Link className="HUBcardImgLink" to="/blogs/three-important-parameters-in-intraoral-camera-technology" style={{ textDecoration: "none" }}>
            <img src={Threeimp} alt="Three Important Parameters in Intra Oral"/>
            </Link>
            <Link className="HUBcardTitleLink" to="/blogs/three-important-parameters-in-intraoral-camera-technology" style={{ textDecoration: "none" }}>
            <h6>Three Important Parameters in Intra Oral Camera Technology</h6>
            </Link>
              <p>Learn how three important parameters—Depth of Field, Field of View, and Image Quality...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/three-important-parameters-in-intraoral-camera-technology"></AnimatedButton>
            </div>
            <div className="hubblog-card">
            <Link className="HUBcardImgLink" to="/blogs/capturing-dentists-pov-with-dental-loupe-cameras" style={{ textDecoration: "none" }}>
            <img src={Capturing} alt="Dental Loupe Cameras" />
            </Link>
            <Link className="HUBcardTitleLink" to="/blogs/capturing-dentists-pov-with-dental-loupe-cameras" style={{ textDecoration: "none" }}>
            <h6>Capturing the Dentists’ POV with Dental Loupe Cameras</h6>
            </Link>
              <p>This blog explores features that enable loupe cameras for precise diagnoses. Find out why size...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/capturing-dentists-pov-with-dental-loupe-cameras"></AnimatedButton>
            </div>
        </div>
      </div>
    </div>

     <div className="hubpageblog hubfeature-row" data-aos="fade-up" data-aos-duration="1000">
      <div className="hubfeature-card">
        <div className="hubfeature-body">
         
          <Link className="HUBcardTitleLink" to="/blogs/veterinary-intraoral-imaging-with-densicam" style={{ textDecoration: "none" }}>
            <h2>From Human Dentistry to Veterinary Care: How DensiCAM Elevates Intraoral Imaging</h2>
          </Link>
          <p>Explore how intraoral imaging can support veterinary oral examinations, clinical documentation, and conversations with pet owners. Learn how depth of field, a 90&deg; field of view, and Full HD capture translate from human dentistry into veterinary care.</p>
          <p className="hubfeature-meta">By Bharath Kumar <span aria-hidden="true">&bull;</span> 8 min read</p>
          <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/veterinary-intraoral-imaging-with-densicam"></AnimatedButton>
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
