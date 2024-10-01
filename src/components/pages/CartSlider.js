// CardSlider.js
import React from 'react';
import Slider from "react-slick";
import './CardSlider.css';

const CardSlider = ({ images, name }) => {
    const settings = {
        dots: false, // Show dots for navigation
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1,
        centerMode: false, // Disable center mode
        nextArrow: <SampleNextArrow />, // Custom Next Arrow
        prevArrow: <SamplePrevArrow />, // Custom Prev Arrow
    };

    return (
        <div className="slider-wrapper">
            {/* Name Section */}
            <div className="heading">
                <h1>{name}</h1>
            </div>

            {/* Slider Section */}
            <Slider {...settings}>
    {images.map((image, index) => (
        <div key={index} className="card">
        <div className="img-wrapper">
            <img src={image.src} alt={`slide-${index}`} />
        </div>
        <div className="card-content">
            <p>{image.duration}</p>
            <h3>{image.title}</h3>
            <p className="price">
                {image.price} <span className="original-price">{image.originalPrice}</span>
            </p>
            <p className="discount">{image.discount}</p>
            <p className="rating">Rating: {image.rating}</p>
        </div>
        {/* Flex container for the buttons */}
        <div className="button-container">
            <button className="column-button"><i class="fas fa-phone icon"></i>
            </button> {/* Left button */}
            <button className="avail-button">Avail This Offer</button> {/* Right button */}
        </div>
    </div>
    
    ))}
</Slider>

        </div>
    );
};

// Custom Next Arrow
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={`${className} arrow`} onClick={onClick}>
            &gt;
        </div>
    );
}

// Custom Prev Arrow
function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={`${className} arrow`} onClick={onClick}>
            &lt;
        </div>
    );
}

export default CardSlider;
