// ...existing code...
import React from 'react';
import { Card } from 'antd';
import './LandingPage.css';

const SpeakerCard = ({ name, job, company, image }) => (
  <Card className="speaker-card" bordered={false}>
    <img className="speaker-image" src={image} alt={name} />
    <div className="speaker-info">
      <div className="speaker-name">{name}</div>
      <div className="speaker-job">{job}</div>
      <div className="speaker-company">{company}</div>
    </div>
  </Card>
);

export default SpeakerCard;
