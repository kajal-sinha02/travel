// CardSlider.js
import React from 'react';
import Slider from "react-slick";
import './CardSlider.css';

const CardSlider = ({ images, name }) => {
    const settings = {
        dots: false, // No navigation dots
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 3, // Show 3 slides at once
        slidesToScroll: 1, // Scroll one slide at a time
        swipeToSlide: true, // Allows users to scroll between slides by swiping
        draggable: true, // Allow dragging for desktop users
        swipe: true, // Enable swipe functionality for mobile
        responsive: [
            {
                breakpoint: 1024, // Adjust for tablets
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600, // Adjust for mobile
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
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

        <div className="button-container">
            {/* <button className="column-button"><i class="fas fa-phone icon"></i>
            </button>  */}
            <button className="avail-button2"><i className="fas fa-phone icon"></i> </button>
            <button className="avail-button">Avail This Offer</button>
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
