import React from 'react';
import WebinarCard from './WebinarCard';
import './Webinars.css';
import { Helmet } from 'react-helmet-async';
// Example data for concluded webinars
const webinars = [
  {
    title: 'Challenges of Depth of Field in Dental Imaging',
    date: 'January 29, 2026, 09:00 AM to 09:45 AM (PST)',
    content: 'Join e-con Systems for an exclusive webinar on how DoF in Macro Imaging influences image quality in medical applications. Our vision experts from e-con Systems will discuss the common challenges of Depth of Field in medical imaging and present how camera design selection directly influences it. Whether you design, specify, or use medical cameras, this webinar delivers clear, practical insights into managing DoF effectively.',
    cta: 'Know more',
    url: '/webinars/challenges-of-depth-of-field-in-dental-imaging',
    thumbnail: 'https://www.e-consystems.com/images/webinar-landing-page/medical-webinar-hub-image.jpg',
  },
];

const Webinars = () => (
    <>
        <Helmet>
    <title>Webinars</title>
    <meta name='description' content='e-con Systems Dental webinars provide detailed information, education, and discussion of major topics relating to our products.' />
    </Helmet>
  <div className="webinars-hub-container">

    <h1 className="webinars-title">Concluded Webinar</h1>
    <div className="webinars-list">
      {webinars.map((webinar, idx) => (
        <WebinarCard key={idx} {...webinar} />
      ))}
    </div>
  </div>
  </>
);

export default Webinars;
