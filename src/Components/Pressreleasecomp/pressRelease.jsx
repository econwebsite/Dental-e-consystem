import React from "react";
import "./pressRelease.css";
import thumb from "../../assets/pressrelease-thumb.png"

const pressRelease = {
  title: "DensiCAM - Full HD Intraoral Camera for OEM Report Q2 2025",
  date: "July 1, 2025",
  pdfUrl: "https://www.e-consystems.com/pr/e-con-systems-launches-onvif-compliant-4k-hdr-gige-camera-for-smart-vision-applications-pr-en.pdf",
  previewImg: thumb, 
};

export default function PressRelease() {
  return (
    <div className="press-container">
      <h2 className="press-heading">Press Release</h2>

      <div className="press-card" onClick={() => window.open(pressRelease.pdfUrl, "_blank")}>
        <div className="pdf-preview-wrapper">
          <img
            src={pressRelease.previewImg}
            alt="PDF Preview"
            className="pdf-preview-image"
          />
          <div className="pdf-overlay" />
        </div>

        <div className="press-card-info">
          <h3 className="press-card-title">{pressRelease.title}</h3>
          <div className="press-card-meta">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm7 8l-4-4 1.4-1.4 2.6 2.6 5.6-5.6L19 8l-7 7z"/>
            </svg>
            <span className="press-card-date">{pressRelease.date}</span>
          </div>
          <button
            className="press-card-button"
            onClick={(e) => {
              e.stopPropagation();
              window.open(pressRelease.pdfUrl, "_blank");
            }}
          >
            View PDF
          </button>
        </div>
      </div>
    </div>
  );
}
