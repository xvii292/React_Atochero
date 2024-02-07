import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import declaracionJavi from "../assets/declaracionJavier.png";
import declaracionEneko from "../assets/declaracionEneko.png";
import declaracionJuanj from "../assets/declaracionJuanJo.png";
import './carrusel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const divStyle = {
        padding: '30px',
    };

    const imageStyle = {
        width: 'auto',
        maxHeight: '500px',
        margin: '0 auto',
    };


    return (
        <Slider {...settings} class="slider">
            <div style={divStyle}>
                <img src={declaracionJavi} alt="declaracionuser" style={imageStyle} />
            </div>
            <div style={divStyle}>
                <img src={declaracionEneko} alt="declaracionuser2" style={imageStyle} />
            </div>
            <div style={divStyle}>
                <img src={declaracionJuanj} alt="declaracionuser3" style={imageStyle} />
            </div>
        </Slider>
    );
};

export default Carousel;
