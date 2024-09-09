import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AnimatedButton.css';

const AnimatedButton = ({
  text = 'Click Me',
  backgroundColor = '#344ea1',
  animationColor = '#69ba2f',
  hoverColor = '#69ba2f',
  className = '',
  onClick,
  to,
  ...props
}) => {
  const navigate = useNavigate(); 

  const handleClick = (event) => {
    if (to) {
      navigate(to); 
    }
    if (onClick) {
      onClick(event); 
    }
  };

  return (
    <button 
      className={`newanimation ${className}`} 
      style={{ 
        backgroundColor, 
        '--animation-color': animationColor, 
        '--hover-color': hoverColor,
        color: 'white' 
      }}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default AnimatedButton;
