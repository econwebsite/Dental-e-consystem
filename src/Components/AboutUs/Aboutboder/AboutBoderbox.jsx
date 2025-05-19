import React from 'react';
import './Aboutboderbox.css';
import quotedown from "../../../assets/home images/quotes-01.png";
import quoteup from "../../../assets/home images/quotes-02.png";

const Aboutboderbox = () => {
  const boxes = [
    { id: 1, circleColor: '#def9fc', text1: "Who?", boxColor: '#344ea1', text: "Customized solutions provider for your dental imaging specifications." },
    { id: 2, circleColor: '#b8f2ff', text1: "Why?", boxColor: '#4fcce0', text: "To reduce your products' time to market and cut down on development costs." },
    { id: 3, circleColor: '#caf5fc', text1: "What?", boxColor: '#344ea1', text: "End-to-end solutions for your intraoral, extraoral and loupe camera requirements." },
    { id: 4, circleColor: '#def9fc', text1: "How?", boxColor: '#4fcce0', text: "Driven by our vast experience in dental cameras and dedicated team of engineers." },
  ];

  return (
    <div className="aboutcomp-container">
      {boxes.map((box) => (
        <div key={box.id} className="aboutcomp-box" style={{ backgroundColor: box.boxColor }}>
          <div className="aboutcomp-circle" style={{ backgroundColor: box.circleColor,color:"#003873" }}>
            {box.text1}
          </div>
          <div className="aboutcomp-box-content">
            <img src={quoteup} className="aboutcomp-quote aboutcomp-quote-up" alt="Quote Up"/>
            <p className="aboutcomp-description" style={{color:"white"}}>
              {box.text}
            </p>
            <img src={quotedown} className="aboutcomp-quote aboutcomp-quote-down" alt="Quote Down"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aboutboderbox;
