import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from '../assets/3.jpg'
import image2 from '../assets/4.jpg'
import image3 from '../assets/5.jpg'
import image4 from '../assets/6.jpg'
import image5 from '../assets/7.jpg'

const Services = () => {
    return (
        <Carousel
            autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={1000}
        >
            <div>
                <img src={image1} alt="web-development" />
                <p className="mb-0">Web Development</p>
            </div>
            <div>
                <img src={image2} alt="front-end" />
                <p className="mb-0">Front End</p>
            </div>
            <div>
                <img src={image3} alt="back-end" />
                <p className="mb-0">Back End</p>
            </div>
            <div>
                <img src={image4} alt="full-stack" />
                <p className="mb-0">Full Stack</p>
            </div>
            <div>
                <img src={image5} alt="mern-stack" />
                <p className="mb-0">Mern Stack</p>
            </div>
        </Carousel>
    )
}

export default Services