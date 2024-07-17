import React, { useState } from 'react';
import images from '../images';
import './carousel.css';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>&#9664;</button>
            <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
            <button className="carousel-button next" onClick={nextSlide}>&#9654;</button>
            <Link to="/reserva" className="view-more-button">Ver canchas</Link>
        </div>
    );
};

export default Carousel;
