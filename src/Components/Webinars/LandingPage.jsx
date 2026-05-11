import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { useParams } from 'react-router-dom';
import { Breadcrumb, Typography, Row, Col, Card } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import webinarsData from './webinarsData';
import SpeakerCard from './SpeakerCard';
import WebinarDownloadForm from './WebinarDownloadForm';
import './LandingPage.css';
import { Helmet } from 'react-helmet-async';
const { Title, Paragraph } = Typography;

const WebinarLandingPage = () => {
  const { slug } = useParams();
  const webinar = webinarsData.find(w => w.slug === slug);

  if (!webinar) return <div>Webinar not found.</div>;

  // Lightbox state for video popup (match Videos.jsx logic)
  const [toggler, setToggler] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState('');

  // YouTube embed URL
  const videoEmbedUrl = webinar.videoId ? `https://www.youtube.com/embed/${webinar.videoId}` : '';
  // YouTube thumbnail (fallback to hqdefault if maxresdefault fails)
  const videoThumb = webinar.videoId
    ? `https://img.youtube.com/vi/${webinar.videoId}/maxresdefault.jpg`
    : '';

  return (
    <>
      <Helmet>
        <title>{webinar.title}</title>
        <meta name='description' content={webinar.description[0]} />
      </Helmet>
    <div className="webinar-landing-container">
      <Breadcrumb className="webinar-breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/webinars">Webinars</Breadcrumb.Item>
        <Breadcrumb.Item>{webinar.title}</Breadcrumb.Item>
      </Breadcrumb>
      <Title level={1} className="webinar-landing-title">{webinar.title}</Title>
      {webinar.description[0] && (
        <Paragraph className="webinar-online-para">{webinar.description[0]}</Paragraph>
      )}
      <Row gutter={[32, 32]} className="webinar-top-row">
        <Col xs={24} md={14} className="webinar-info-col">
          {/* Only show the second description line here, if it exists */}
         
          <div className="webinar-date-time">
            <CalendarOutlined style={{ marginRight: 8, color: '#003873' }} />
            {webinar.date}
          </div>
          {/* Webinar video thumbnail with play button overlay */}
          <div className="webinar-video-thumb-container">
            <div
              className="webinar-video-thumb-wrapper"
              onClick={() => {
                setCurrentVideoSrc(videoEmbedUrl);
                setToggler(t => !t);
              }}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={videoThumb}
                alt="Webinar Video Thumbnail"
                className="webinar-video-thumb"
                onError={e => {
                  // fallback to hqdefault if maxresdefault fails
                  if (!e.target.src.includes('hqdefault')) {
                    e.target.src = `https://img.youtube.com/vi/${webinar.videoId}/hqdefault.jpg`;
                  }
                }}
              />
              <span className="webinar-video-play">
                <svg width="40" height="40" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#ff0000" fillOpacity="0.85"/><polygon points="26,20 50,32 26,44" fill="#fff"/></svg>
              </span>
            </div>
          </div>
          {webinar.description[1] && (
            <Paragraph className="webinar-desc">{webinar.description[1]}</Paragraph>
          )}
          <div className="webinar-key-takeaways">
            <Title level={4}>Key Takeaways</Title>
            <ul>
              {webinar.keyTakeaways.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xs={24} md={10} className="webinar-form-col">
          <div className="webinar-form-title">REGISTER HERE TO GET FULL WEBINAR RECORDING</div>
          <WebinarDownloadForm webinarTitle={webinar.title} type={webinar.type} />
        </Col>
      </Row>
      <div className="webinar-speakers-section" style={{ textAlign: 'center' }}>
        <Title level={3} className="webinar-speakers-title" style={{ textAlign: 'center' }}>Speakers</Title>
        <Row gutter={[24, 24]} justify="center">
          {webinar.speakers.map((sp, i) => (
            <Col xs={24} sm={12} md={8} key={i} style={{ display: 'flex', justifyContent: 'center' }}>
              <SpeakerCard {...sp} />
            </Col>
          ))}
        </Row>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={[currentVideoSrc]}
        types={["youtube"]}
      />
    </div>
    </>
  );
};

export default WebinarLandingPage;
