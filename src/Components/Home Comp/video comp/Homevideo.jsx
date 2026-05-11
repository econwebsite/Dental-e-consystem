import React, { useState, useRef, useEffect } from 'react';
import './Homevideo.css';
import Vediothumbnail1 from "../../../assets/videos/thumbnail.jpg";
import Vediothumbnail2 from "../../../assets/videos/thumbnail2.jpg";
import Vediothumbnail3 from "../../../assets/videos/can-you-see-the-difference.jpg";
import Vediothumbnail4 from "../../../assets/videos/why-you-trust-this.jpg";
import Vediothumbnail5 from "../../../assets/videos/sharper-dental-imaging.jpg";
import FsLightbox from "fslightbox-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-prev" onClick={onClick} aria-label="Previous">
      ‹
    </button>
  );
}
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-next" onClick={onClick} aria-label="Next">
      ›
    </button>
  );
}

function Dentalvideopg({bgColor='#f1f2f2'}) {
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const reopenTimer = useRef(null);

  // duplicate 3 videos to 6 for testing
  const base = [
    { thumb: Vediothumbnail1, src: "https://www.youtube.com/embed/qfmwMkSypo4" },
    { thumb: Vediothumbnail2, src: "https://www.youtube.com/embed/O35WqKAkJZo" },
    { thumb: Vediothumbnail3, src: "https://www.youtube.com/embed/fwH4LAfKtMI" },
    { thumb: Vediothumbnail4, src: "https://www.youtube.com/embed/FmgwmRtmA3k" },
    { thumb: Vediothumbnail5, src: "https://www.youtube.com/embed/NRYjO3WAk4E" },
  ];
  const videos = [...base]; // 6 items

  const settings = {
    dots: false,            // hide bottom indicators
    arrows: true,
    prevArrow: PrevArrow,
    nextArrow: NextArrow,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 560, settings: { slidesToShow: 1 } }
    ]
  };

  const handleVideoClick = (index) => {
    // if lightbox closed -> open single clicked video
    if (!toggler) {
      setCurrentVideoIndex(index);
      setSlideIndex(index);
      setToggler(true);
      return;
    }

    // if lightbox open and same video clicked -> close it
    if (toggler && index === currentVideoIndex) {
      setToggler(false);
      return;
    }

    // if lightbox open and different video clicked -> close then reopen with new video
    if (toggler && index !== currentVideoIndex) {
      setToggler(false);
      setCurrentVideoIndex(index);
      setSlideIndex(index);
      clearTimeout(reopenTimer.current);
      reopenTimer.current = setTimeout(() => {
        setToggler(true);
      }, 120);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(reopenTimer.current);
    };
  }, []);

  return (
    <>
      <div className="tot-denvedio" style={{backgroundColor:bgColor}}>
        <div className='mainContainer'>
          <h2>Videos</h2>
          <div className="slider-container">
            <Slider {...settings}>
              {videos.map((v, idx) => {
                return (
                  <div key={idx} className="slide-item">
                    <div
                      className="home-thumbnail"
                      onClick={() => handleVideoClick(idx)}
                    >
                      <img src={v.thumb} alt={`Video ${idx+1}`} className="homeside-img" />
                    </div>
                  </div>
                );
              })}
            </Slider>

            <FsLightbox
              toggler={toggler}
              sources={[videos[currentVideoIndex]?.src]}
              slide={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dentalvideopg;
