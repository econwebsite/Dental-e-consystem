import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Footerpage.css';
import { message } from 'antd';
import dentallogo from "../../assets/home-images/NewDentallogo.png";
import econlogo from "../../assets/home-images/footerlogo-1.svg"
import { RiPhoneFill, RiMailFill,RiArrowDownSLine  } from 'react-icons/ri';
import AnimatedButton from "../Button comp/AnimatedButton"
import { Link } from 'react-router-dom';
const Footerpage = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSubscribedOnce, setIsSubscribedOnce] = useState(false);
  const validateEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;

    try {
      const response = await axios.post('https://api.dental.e-consystems.com/api/validateEmail', { email });
      return (
        (['valid', 'catch-all', 'role-basic'].includes(response.data.status) && !response.data.free_email) ||
        response.data.isValid === true
      );

    } catch (error) {
      console.error('Email validation error:', error);
      return false;
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (isSubscribedOnce) {
      message.warning('You have already subscribed.');
      return;
    }
    setIsProcessing(true);
    setIsComplete(false);
    setIsValid(true);

    if (!email) {
      setIsValid(false);
      setIsProcessing(false);
      return;
    }

    const isValidEmail = await validateEmail();
    if (!isValidEmail) {
      setIsValid(false);
      setIsProcessing(false);
      return;
    }

    try {
      await axios.post('https://api.dental.e-consystems.com/api/emailSubscription', { email });
      message.success('Thank you for subscribing!');
      setEmail('');
      setIsComplete(true);
      setIsSubscribedOnce(true);
    } catch (error) {
      console.error('Subscription error:', error);
      message.error('Subscription failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (isComplete || !isValid) {
      const timer = setTimeout(() => {
        setIsComplete(false);
        setIsValid(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isComplete, isValid]);
  return (
    <footer className="footer-container">
      <div className="mainContainer">
        <div className="footer-inner">
          <div className="footer-column footer-column-logo">
            <div className="footer-logo">
              <img src={dentallogo} alt="econ logo" />
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
            <form onSubmit={handleSubscribe} className="Footer-newsletterForm">
              <div className="footer-subscribe-input">
                <input
                  type="email"
                  autoComplete="off"
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  placeholder="Email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`Footer-emailInput ${!isValid ? 'Footer-inputError' : ''}`}
                  disabled={isSubscribedOnce}
                  required
                />
                <AnimatedButton
                  className="footerproceed-btn"
                  text={isProcessing ? 'Please Wait...' : isSubscribedOnce ? 'Subscribed' : 'Proceed'}
                  backgroundColor="#003873"
                  animationColor="#69ba2f"
                  hoverColor="#69ba2f"
                  type="submit"
                  disabled={isProcessing || isSubscribedOnce}
                />
              </div>
              {!isValid && <p className="Footer-errorMessage">Please enter a valid email address</p>}
              {isComplete && <p className="Footer-successMessage">Thank you for subscribing!</p>}
            </form>
            <div className="footer-social-icons">
              <a href='https://www.e-consystems.com/'>
                <img src={econlogo} alt="e-con logo" style={{ width: "300px" }} /></a>
            </div>
            <div className="footer-bottom-text">
              <p><span style={{ color: "#003873" }}>e-con Systems&reg;</span> {new Date().getFullYear()}, all rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footerpage;
