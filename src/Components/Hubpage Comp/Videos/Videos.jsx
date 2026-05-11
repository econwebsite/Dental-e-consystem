import React, { useState, useRef, useEffect } from 'react';
import './Videos.css';
import Vediothumbnail1 from "../../../assets/videos/thumbnail.jpg";
import Vediothumbnail2 from "../../../assets/videos/thumbnail2.jpg";
import Vediothumbnail3 from "../../../assets/videos/can-you-see-the-difference.jpg";
import Vediothumbnail4 from "../../../assets/videos/why-you-trust-this.jpg";
import Vediothumbnail5 from "../../../assets/videos/sharper-dental-imaging.jpg";
import Vediothumbnail6 from "../../../assets/videos/what-image-quality-really-means.png";
import FsLightbox from "fslightbox-react";
import { Helmet } from 'react-helmet-async';

const Videos = () => {
    const [toggler, setToggler] = useState(false);
    const [currentVideoSrc, setCurrentVideoSrc] = useState('');
    const reopenTimer = useRef(null);

    const allVideos = [
        { thumb: Vediothumbnail5, src: "https://www.youtube.com/embed/NRYjO3WAk4E", title: "Sharper Dental Imaging" },
        { thumb: Vediothumbnail1, src: "https://www.youtube.com/embed/qfmwMkSypo4", title: "Dental Camera Demo" },
        { thumb: Vediothumbnail2, src: "https://www.youtube.com/embed/O35WqKAkJZo", title: "Imaging Technology" },
        { thumb: Vediothumbnail3, src: "https://www.youtube.com/embed/fwH4LAfKtMI", title: "Can You See The Difference?" },
    ];
    const podcastsVideos = [
        { thumb: Vediothumbnail6, src: "https://www.youtube.com/embed/qaXd_W1GxrQ", title: "What Image Quality Really Means in Intraoral Cameras" },
        { thumb: Vediothumbnail4, src: "https://www.youtube.com/embed/FmgwmRtmA3k", title: "Why You Trust This" },
    ];

    const handleVideoClick = (src) => {
        if (!toggler) {
            setCurrentVideoSrc(src);
            setToggler(true);
            return;
        }
        if (toggler && src === currentVideoSrc) {
            setToggler(false);
            return;
        }
        if (toggler && src !== currentVideoSrc) {
            setToggler(false);
            setCurrentVideoSrc(src);
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
        <div className='hubvideo-tot'>
            <Helmet>
                <title>Dental Videos & Podcasts: Expert Insights & Educational Content</title>
                <meta name='description' content='Watch our collection of dental videos and podcasts featuring expert insights, educational content, and demonstrations on dental imaging and camera technology.' />
            </Helmet>
            <div className='mainContainer'>
                <h1 className="video-main-title">Dental Videos</h1>
                {/* Podcasts Section */}
                <section className="video-section">
                    <h2 className="video-section-title">Dental Imaging Explained – Intraoral Camera Series</h2>
                    <div className="video-grid">
                        {podcastsVideos.map((video, idx) => (
                            <div key={idx} className="video-card" onClick={() => handleVideoClick(video.src)}>
                                <div className="video-thumb-wrap">
                                    <img src={video.thumb} alt={video.title} className="video-thumb" />
                                    <div className="play-icon">▶</div>
                                </div>
                                <div className="video-title">Episode {podcastsVideos.length - idx} : {video.title}</div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Videos Section */}
                <section className="video-section">
                    <h2 className="video-section-title">Product Videos</h2>
                    <div className="video-grid">
                        {allVideos.map((video, idx) => (
                            <div key={idx} className="video-card" onClick={() => handleVideoClick(video.src)}>
                                <div className="video-thumb-wrap">
                                    <img src={video.thumb} alt={video.title} className="video-thumb" />
                                    <div className="play-icon">▶</div>
                                </div>
                                <div className="video-title">{video.title}</div>
                            </div>
                        ))}
                    </div>
                </section>
                <FsLightbox
                    toggler={toggler}
                    sources={[currentVideoSrc]}
                    slide={1}
                />
            </div>
        </div>
    );
};

export default Videos;
