import React, { useState } from 'react';
// import { Button } from 'antd';
import "./Modelbutton.css"
import Modelform from './Modelform';

const Modelbutton =({
  text = 'Contact Us',
  backgroundColor = '#344ea1',
  animationColor = '#69ba2f',
  hoverColor = '#69ba2f',
  className = '',
  productName = null,
  docName = null,
  }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button className={`newanimation ${className}`} 
        type="primary"
        style={{ 
          backgroundColor, 
          '--animation-color': animationColor, 
          '--hover-color': hoverColor,
          color: 'white' 
        }}
        onClick={showModal}
      >
       {text}
      </button>

      <Modelform
        visible={isModalVisible}
        onClose={handleCancel}
        type = {text === 'Contact Us'?`contact`:`download`}
        productName={productName || null}
        docName={docName || null}
      />
    </div>
  );
};

export default Modelbutton;
