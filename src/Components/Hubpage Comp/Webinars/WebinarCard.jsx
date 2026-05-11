import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Webinars.css';
import AnimatedButton from '../../Button comp/AnimatedButton';


const WebinarCard = ({ title, date, content, cta, url, thumbnail }) => (
  <Card className="webinar-card" hoverable bodyStyle={{ padding: 0 }}>
    <div className="webinar-row">
      <div className="webinar-image-col">
        <Link to={url} className="webinrCardLink">
          <img className="webinar-thumbnail" src={thumbnail} alt={title} />
        </Link>
      </div>
      <div className="webinar-content-col">
        <div className="webinar-card-header">
          <Link to={url} className="webinrCardLink">
            <div className="webinar-title">{title}</div>
          </Link>
          <div className="webinar-date">{date}</div>
        </div>
        <div className="webinar-content">{content}</div>
        <div className="webinar-card-footer">
       
          <AnimatedButton className="webinrCardLink" text={cta} backgroundColor="#69ba2f" animationColor="#344ea1" hoverColor="#69ba2f" to={url}></AnimatedButton>
        </div>
      </div>
    </div>
  </Card>
);

export default WebinarCard;
