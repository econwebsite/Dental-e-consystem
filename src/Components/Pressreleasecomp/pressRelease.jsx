import React from "react";
import "./pressRelease.css";
import thumb from "../../assets/pressrelease-thumb.png";
import prdoc from "../../assets/e-con-systems-launches-Densicam-pr.pdf"
const pressRelease = {
  title: "e-con Systems® Launches DensiCAM - Full HD Intraoral Camera for OEMs",
  date: "July 16, 2025",
  pdfUrl: prdoc,
  previewImg: thumb,
};

export default function PressRelease() {
  return (
    <div className="Pressrelease-container">
      <h2 className="Pressrelease-heading">Press Releases</h2>

      <div className="Pressrelease-card" onClick={() => window.open(pressRelease.pdfUrl, "_blank")}>
        <div className="Pressrelease-pdf-preview-wrapper">
          <img
            src={pressRelease.previewImg}
            alt="PDF Preview"
            className="Pressrelease-pdf-preview-image"
          />
          <div className="Pressrelease-pdf-overlay" />
        </div>

        <div className="Pressrelease-card-info">
          <h3 className="Pressrelease-card-title">{pressRelease.title}</h3>
          <div className="Pressrelease-card-meta">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm7 8l-4-4 1.4-1.4 2.6 2.6 5.6-5.6L19 8l-7 7z"/>
            </svg>
            <span className="Pressrelease-card-date">{pressRelease.date}</span>
          </div>
          <button
            className="Pressrelease-card-button"
            onClick={(e) => {
              e.stopPropagation();
              window.open(pressRelease.pdfUrl, "_blank");
            }}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
