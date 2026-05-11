import React from 'react';
import { Typography, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import './ScannerImagingSoftware.css';
const { Title, Paragraph } = Typography;
import opendentalImg from '../../../../assets/product-images/opendental.png';
import tigerviewImg from '../../../../assets/product-images/tigerview.png';
import mipacsImg from '../../../../assets/product-images/mipacs.png';
import dexisImg from '../../../../assets/product-images/dexis.png';
import eaglesoftImg from '../../../../assets/product-images/eaglesoft.png';
import cadiImg from '../../../../assets/product-images/cadi.png';

const SOFTWARE_DATA = [
    { title: 'Open Dental', image: opendentalImg },
    { title: 'Tigerview', image: tigerviewImg },
    { title: 'MiPACS', image: mipacsImg },
    { title: 'Dexis', image: dexisImg },
    { title: 'Eaglesoft', image: eaglesoftImg },
    { title: 'CADI', image: cadiImg },
];

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <Button
            type="default"
            icon={<RightOutlined />}
            className="slick-arrow slick-next custom-slick-arrow"
            onClick={onClick}
            style={{ right: '-25px' }}
        />
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <Button
            type="default"
            icon={<LeftOutlined />}
            className="slick-arrow slick-prev custom-slick-arrow"
            onClick={onClick}
            style={{ left: '-25px' }}
        />
    );
};

const ScannerImagingSoftware = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <section style={{ padding: '4rem 1rem' }}>
            <div className='imagingContainer' style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
                <h1>Compatible Imaging Software</h1>
                <p className="description">
                    Our scanners have been tested and verified to work seamlessly with the following popular dental imaging applications:
                </p>
                <div className="slider-container" style={{ position: 'relative', margin: `3rem 0` }}>
                    <Slider {...settings}>
                        {SOFTWARE_DATA.map((item, index) => (
                            <div key={index} className="card-slide-item d-flex flex-column align-items-center" style={{ padding: '0 10px' }}>
                                <img src={item.image} alt={item.title} className="software-image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <p className="description mt-8">
                    We also support other dental imaging and practice management software that utilize UVC or TWAIN interfaces, ensuring broad compatibility across various clinical workflows.
                </p>
            </div>
        </section>
    );
};

export default ScannerImagingSoftware;
