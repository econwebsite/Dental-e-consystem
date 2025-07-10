import React, { useState } from 'react';
import { Collapse } from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import { QuestionCircleOutlined, CloseOutlined } from '@ant-design/icons';
import './faq.css';

const { Panel } = Collapse;

const faqs = [
  {
    question: 'What is the DensiCAM Intraoral Camera?',
    answer: 'DensiCAM is a Full HD Intraoral camera with a USB 3.0 or USB 2.0 interface.',
  },
  {
    question:"What is included in the box when purchasing DensiCAM?",
    answer: (
      <ul className="included-items">
        <li>DensiCAM intraoral camera</li>
        <li>USB cable</li>
        <li>e-CAMView application for Windows (downloadable)</li>
      </ul>
    )
  },
  {
    question:"Is DensiCAM a fixed focus lens or an auto focus lens?",
    answer:"The camera has a custom fixed-focus lens. It is optimized for a wide depth of field. This allows you to capture clear, sharp images without needing to adjust the focus."
  },
  {
    question:"What is the depth of field (DoF) supported by the DensiCAM Intraoral camera?",
    answer:"The DensiCAM offers a depth of field ranging from 5mm to 80mm, allowing it to capture clear images across various distances—ideal for full-mouth intraoral coverage from anterior teeth to molars—in a single frame."
  },
  {
    question:"Can the field of view (FOV) capture multiple teeth in a single frame?",
    answer:"The DensiCAM camera features an 90-degree FOV, allowing it to cover both quadrant and individual tooth views, and effortlessly capture up to three teeth in a single shot."
  },
  {
    question:"Is DensiCAM a wired or wireless intraoral camera?",
    answer: (
      <div>
        <p>DensiCAM is a wired intraoral camera that connects via USB interface. For more information or customization inquiries, 
          please contact <a href="mailto:camerasolutions@e-consystems.com" className="email-link">camerasolutions@e-consystems.com</a>.
        </p>
      </div>
    )
  },
  {
    question:"What is the length of the USB cable provided with the DensiCAM Intraoral camera?",
    answer: (
      <div>
        <p>DensiCAM Intraoral camera comes with a 2m Magnetic Pogo Pin to USB 2.0 Type A cable. For longer cable requirements, contact us
          <a href="mailto:camerasolutions@e-consystems.com" className="email-link"> camerasolutions@e-consystems.com</a>.
        </p>
      </div>
    )
  },
  {
    question:"Does the camera support LED customization?",
    answer:"The camera features integrated high-power 8 LEDs, including a cool white 5000K color temperature LED, which provides stable illumination for dental imaging."
  },
  {
    question:"Is UV or IR LED customization supported?",
    answer: (
      <div>
        <p>The standard model features integrated high-power 8 LEDs, including a cool white 5000K color temperature LED, which provides stable illumination for dental imaging. please contact <a href="mailto:camerasolutions@e-consystems.com" className="email-link">camerasolutions@e-consystems.com</a> for more information on special lighting configurations.</p>
      </div>
    )
  },
  {
    question:"Is the DensiCAM intraoral camera operated via physical buttons or capacitive touch?",
    answer:"DensiCAM is equipped with a touch-responsive (capacitive touch) surface that supports gesture controls such as tap, hold, and swipe for operation. This allows intuitive operation."
  },
  {
    question:"What is the benefit of using a capacitive touch surface for this camera?",
    answer:"The capacitive touch surface enables easy operation through simple gestures, eliminating the need to press physical buttons, and thus reducing handshake and ensuring stable image capture."
  },
  {
    question:"Does the DensiCAM work with Windows OS?",
    answer:"Yes, DensiCAM Intraoral camera is compatible with Windows 10 and Windows 11 operating systems."
  },
  {
    question:"Does the camera require any drivers to be installed?",
    answer:"The camera is UVC-compliant and is compatible with native USB Video Class drivers in Windows operating systems, so additional drivers are not required."
  },
  {
    question:"How do I connect the DensiCAM Intraoral camera to my computer?",
    answer: (
      <div>
        <p>Connect the magnetic USB Type A cable to to a USB 2.0 or 3.0 Type A port on your PC or laptop.</p>
        <p>The camera currently comes with a magnetic connector, and future models will be equipped with a USB Type-C interface.</p>
      </div>
    )
  },
  {
    question:"Does DensiCAM support dental practice management software?",
    answer:"Yes, the camera supports TWAIN drivers, enabling seamless integration with most leading dental imaging and practice management software platforms."
  },
  {
    question:"I don’t have any imaging software, how can I preview/stream the DensiCAM intraoral camera?",
    answer:"We provide a dedicated e-CAMView application developed by e-con Systems for streaming, previewing, and controlling DensiCAM camera modules on Windows."
  },
  {
    question:"Can I adjust the camera parameters according to my preference?",
    answer:"Yes, you can adjusts camera parameters such as exposure, white balance, resolution, and more using the e-CAMView application developed by e-con Systems."
  },
  {
    question:"What resolution and frame rate are supported at maximum?",
    answer:"The camera supports up to 1920x1080 resolution at 30 frames per second (fps) in MJPG or YUV formats, if connected to a USB 2.0 port. It supports up to 60 frames per second (fps) when connected to a USB 3.0 port."
  },
  {
    question:"Does the camera support different imaging modes such as face mode and macro imaging?",
    answer:"Yes, the camera supports two imaging modes, intraoral (macro) mode and full-face mode."
  },
  {
    question:"Does DensiCAM support both still image and video streaming?",
    answer:"Yes, DensiCAM supports both still image capture and real-time video streaming through the dedicated e-CAMView application developed by e-con Systems."
  },
  {
    question:"Does this support recording as well?",
    answer:"Yes, DensiCAM supports video recording through the e-CAMView application."
  },
  {
    question:"How do I know if the DensiCAM Intraoral camera works properly in the Windows operating system?",
    answer: (
      <div className="answer-content">
        <p>To confirm that the DensiCAM Intraoral camera is working properly in Windows, follow one of the steps below:</p>
        
        <div className="step">
          <div className="step-header">1. Open<b> Device Manager</b></div>
          <ul className="nested-list">
            <li><span className="letter">a.</span> Navigate to<b> Control Panel </b> &gt; <b>Device Manager</b> &gt;<b> Cameras</b>.</li>
            <li><span className="letter">b.</span> You should see <b> DensiCAM</b> listed under <b>Cameras</b>. This shows that the system has identified the device accurately.</li>
          </ul>
        </div>
        
        <div className="step">
          <div className="step-header">2. Open<b> e-CAMView application</b></div>
          <ul className="nested-list">
            <li><span className="letter">a.</span> Launch the <b> e-CAMView </b> software.</li>
            <li><span className="letter">b.</span> Go to the <b>Devices </b> menu and ensure <b>DensiCAM</b> is listed.</li>
          </ul>
        </div>
        
        <p>If the camera preview appears, it confirms that the device is streaming and functioning as expected.</p>
        <p>These two checks ensure the camera is connected, detected, and streaming properly in Windows.</p>
      </div>
    )
  },
  {
    question:"How do I access the stored images?",
    answer:"All captured images are automatically saved on the host PC. You can easily view them using any compatible image viewing software on your system."
  },
  {
    question:"What monitor size is recommended for viewing the stored images?",
    answer:"There is no strict requirement for monitor size. However, since the DensiCAM Intraoral Camera captures images in Full HD (1920 × 1080) resolution, we recommend using a monitor that is at least 17 inches or larger with Full HD resolution to ensure sharp and detailed image viewing."
  },{
    question:"What are the DensiCAM Intraoral Camera's physical dimensions?",
    answer:"The camera measures 226.45 mm x 27.2 mm x 17.9 mm (with enclosure)."
  },{
    question:"Is the DensiCAM Intraoral camera compliant with regulatory standards?",
    answer:"Yes, the DensiCAM Intraoral camera meets global regulatory standards, including CE, FCC, RoHS, REACH, and ISO 23450 certifications, ensuring safety, environmental compliance, and quality assurance."
  },{
    question:"Is the DensiCAM water-resistant?",
    answer:"Yes, DensiCAM is IP54 rated."
  },{
    question:"What is the warranty and return policy for DensiCAM?",
answer: (
      <div>
        <p>DensiCAM comes with a 3-year warranty. For return requests or additional support, please contact <a href="mailto:camerasolutions@e-consystems.com" className="email-link">camerasolutions@e-consystems.com</a>.
        </p>
      </div>
    )
  },
  {
    question:"Does the DensiCAM support AI-based diagnostics?",
    answer:"Yes, AI-based diagnostic support is currently under development. This upcoming feature will enable automated detection of key dental conditions such as caries, plaque, gingival inflammation, and tooth fractures."
  },{
    question:"What customization options are available for the DensiCAM?",
      answer: (
        <div>
            <p>The intraoral camera offers a range of customization options to meet specific integration needs. These include:</p>
      <ul className="included-items">
       <li>Enclosure Design</li>
       <li>User Button Configuration</li>
       <li>User Control</li>
       <li>Form Factor</li>
       <li>Cable Interface</li>
      </ul>
      </div>
    )
  },{
    question:"DensiCAM MDR approved?",
   answer: (
      <div>
        <p>Yes, our intraoral camera is classified as a Class I medical device. For our OEM partners, we provide comprehensive support, including all required test reports, technical documentation, and quality management system (QMS) compliance.</p>
        <p>We are currently in the process of obtaining the necessary regulatory clearances, including:</p>
        <p>IEC 60601-1-2 compliance, and</p>
        <p>EU MDR (Regulation (EU) 2017/745) compliance for placing the product on the European market.</p>
      </div>
    )
  },{
    question:"Can we use our own brand label on the intraoral camera?",
    answer:"Yes, we offer OEM and white-label branding options. You can customize the camera with your logo, packaging, and documentation."
  },
  
];

const FAQ = () => {
  const [activeKey, setActiveKey] = useState(null);
  
  const handlePanelChange = (key) => {
    setActiveKey(key[0]);
  };

  return (
     <div className="faq-container">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
      </div>
      
      <Collapse
        accordion
        bordered={false}
        expandIcon={({ isActive }) => (
          <div className="faq-icon-container">
            {isActive ? (
              <CloseOutlined 
                className="faq-icon close-icon"
                style={{ transition: 'all 0.3s ease' }}
              />
            ) : (
              <QuestionCircleOutlined 
                className="faq-icon plus-icon"
                style={{ transition: 'all 0.3s ease' }}
              />
            )}
          </div>
        )}
        expandIconPosition="end"
        activeKey={activeKey}
        onChange={handlePanelChange}
        className="faq-collapse"
      >
        {faqs.map((faq, index) => (
          <Panel 
            header={
              <div className={`faq-question ${activeKey === index.toString() ? 'active' : ''}`}>
                <div className="question-number">{index + 1}</div>
                {faq.question}
              </div>
            } 
            key={index} 
            className={`faq-panel ${activeKey === index.toString() ? 'active' : ''}`}
          >
            <div className="faq-answer">
              {faq.answer}
            </div>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;