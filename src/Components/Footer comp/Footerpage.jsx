import React, { useState } from 'react';
import axios from 'axios';
import './Footerpage.css';
import { message } from 'antd';
import dentallogo from "../../assets/home images/NewDentallogo.png";
import econlogo from "../../assets/home images/footerlogo-1.svg"
import { RiPhoneFill, RiMailFill,RiArrowDownSLine  } from 'react-icons/ri';
import AnimatedButton from "../Button comp/AnimatedButton"
import { Link } from 'react-router-dom';
const Footerpage = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const validateEmail = async () => {
    if (isValid && email.length > 0) {
      try {
        const result = await axios.post('https://api.dental.e-consystems.com/api/validateEmail', { email });
        if (result.data.status === 'valid' || result.data.status === 'catch-all' || result.data.status === 'role_based') {
          if (!result.data.free_email) {
            console.log(result);
            setIsValid(true);
            return true;
          } else {
            console.log(result);
            setIsValid(false);
            return false;
          }
        } else {
          console.log(result);
          setIsValid(false);
          return false;
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    }
    return false;
  };
  const validateEmailId = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };
  const handleChange = (e) => {
    const newEmail = e.target.value;
    console.log(newEmail);
    setEmail(newEmail);
    setIsValid(validateEmailId(newEmail));
  };
  const handelSubscribtion = async () => {
    if (email === null) {
      setIsValid(false);
      return;
    }
    const valid = isValid ? await validateEmail() : false;
    console.log(valid, "emailvalid");
    if (valid) {
      try {
        const result = await axios.post('https://api.dental.e-consystems.com/api/emailSubscription', { email });
        if (result.status === 200)
          message.success('Thanks for subscription!');
        setEmail('');
        setIsValid(true);
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <footer className="footer-container">
      <div className="mainContainer">
        <div className="footer-inner">
          <div className="footer-column footer-column-logo">
            <div className="footer-logo">
              <img src={dentallogo} alt="Company Logo" />
            </div>
        <div className="footer-links">
  <Link to="/">Home</Link>
  <Link to="/product/intraoral-cameras">Intraoral Camera</Link>

  <div className="footer-dropdown-wrapper">
    <div className="footer-link footer-link-dropdown">
  <span>Resources</span>
  <RiArrowDownSLine className="footer-arrow" />
</div>

    <div className="footer-dropdown-links">
      <Link to="/blogs">Blog</Link>
      <Link to="/case-studies">Case Study</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/pressrelease">Press Releases</Link>
    </div>
  </div>
  <Link to="/company/contact-us">Contact Us</Link>
  <Link to="/company/about-us">About Us</Link>
</div>

          </div>
          <div className="footer-divider" />
          <div className="footer-column footer-column-contact">
            <div className="footer-contact-item">
              <p><RiPhoneFill className='footer-con-icon' /><a style={{ textDecoration: "none", color: "#003873" }} href="tel:+14087667503">+1 408 766 7503 </a></p>
            </div>
            <div className="footer-contact-item">
              <p><RiMailFill className='footer-con-icon' /> <a style={{ textDecoration: "none", color: "#003873" }} href="mailto:camerasolutions@e-consystems.com">
                camerasolutions@e-consystems.com
              </a></p>
            </div>
          </div>
          <div className="footer-divider" />
          <div className="footer-column footer-column-subscribe">
            <h4 className="footer-subscribe-title">Subscribe for latest updates</h4>
            <div className="footer-subscribe-input">
              <input type="email" autoComplete='off' onPaste={(e) => {
                e.preventDefault()
                return false;
              }} placeholder="Email id" value={email} onChange={handleChange} />
              <AnimatedButton className="footerproceed-btn" text="Proceed" backgroundColor="#003873" animationColor="#69ba2f" hoverColor="#69ba2f" onClick={handelSubscribtion}></AnimatedButton>
              {!isValid && <p style={{ color: 'red', margin: '0px', textAlign: "center", width: "100%" }}>Invalid email address</p>}
            </div>
            <div className="footer-social-icons">
              <a href='https://www.e-consystems.com/'>
                <img src={econlogo} alt="e-con Logo" style={{ width: "300px" }} /></a>
            </div>
            <div className="footer-bottom-text">
              <p><span style={{ color: "#003873" }}>e-con Systems&reg;</span> 2025, all rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footerpage;
