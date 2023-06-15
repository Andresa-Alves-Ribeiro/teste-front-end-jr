import "./carouselBrands.scss";
import { useRef } from "react";
import Brands from "../brands/brands";
import arrowBlue from "../../assets/arrowBlue.svg";

interface CarouselBrandsProps {
    brandsLogo: Array<{ title: string; photo: string }>;
}

export function CarouselBrands({ brandsLogo }: CarouselBrandsProps) {
    const carousel = useRef<HTMLDivElement | null>(null);


    const handleLeftClick = () => {
        if (carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
        }
    };

    const handleRigthClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }
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
                        {brandsLogo.map((item: { title: string; photo: string }, index: number) => {
                            const { title, photo } = item;
                            return <Brands key={index} title={title} photo={photo} />;
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