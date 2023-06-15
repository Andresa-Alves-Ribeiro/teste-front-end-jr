import "./carouselBrands.scss";
import { useEffect, useState, useRef } from "react";
import Brands from "../brands/brands";
import arrowBlue from "../../assets/arrowBlue.svg";

export function CarouselBrands({ brandsLogo }) {
    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRigthClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    if (!brandsLogo || !brandsLogo.length) return null;

    return (
        <>
            <h2 className="titleBrands">Navegue por marcas</h2>
            <div className="ctnMax">
                <button className="btnArrow" onClick={handleLeftClick}>
                    <img src={arrowBlue} alt="arrow blue" />
                </button>
                <div className="containerCarousel">
                    <div className="carousel" ref={carousel}>
                        {brandsLogo.map((item, index) => {
                            const { title, photo } = item;
                            return <Brands title={title} photo={photo} />;
                        })}
                    </div>
                </div>
                <button className="btnArrow" onClick={handleRigthClick}>
                    <img src={arrowBlue} alt="arrow blue" />
                </button>
            </div>
        </>
    );
}