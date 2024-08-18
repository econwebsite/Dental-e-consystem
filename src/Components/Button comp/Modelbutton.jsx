import React, { useState } from 'react';
// import { Button } from 'antd';
import "./Modelbutton.css"
import Modelform from './Modelform';

const Modelbutton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button className='modelaclass'
        type="primary"
        onClick={showModal}
      >
        Contact Us
      </button>

      <Modelform
        visible={isModalVisible}
        onClose={handleCancel}
      />
    </div>
  );
};

export default Modelbutton;
