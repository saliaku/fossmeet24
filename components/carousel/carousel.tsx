'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'
import React from "react";
import Button from "../Buttons/Button";

interface ArrowProps {
    onClick: React.MouseEventHandler<HTMLDivElement>;
  }

  
function Carousel({children}) {
    const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
        <div className="custom-arrow custom-prev" onClick={onClick}>
            <Button isLeft={true} />
        </div>
    );



    const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
        <div className="custom-arrow custom-next" onClick={onClick}>
            <Button isLeft={false} />
        </div>
    );

    const [windowWidth, setWindowWidth] = useState(0);
    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const getNoOfSlides = () => {
        return windowWidth >= 840 ? 3 : windowWidth < 840 && windowWidth >= 640 ? 2 : 1;
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: getNoOfSlides(),
        slidesToScroll: getNoOfSlides(),
        prevArrow: <PrevArrow onClick={function (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
            throw new Error("Function not implemented.");
        } } />,
        nextArrow: <NextArrow onClick={function (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
            throw new Error("Function not implemented.");
        } } />,
    };


    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default Carousel