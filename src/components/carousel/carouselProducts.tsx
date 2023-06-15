import React, { useRef, useState } from "react";
import { CardProduct, SelectedProduct } from "../cards/cardProduct";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-rigth.svg";
import "./carouselProducts.scss";

interface CarouselProductsProps {
    products: SelectedProduct[];
    setSelectedProducts: (selectedProduct: SelectedProduct) => void;
    setOpenModal: (open: boolean) => void;
}

export function CarouselProducts({
    products,
    setSelectedProducts,
    setOpenModal,
}: CarouselProductsProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [startIndex, setStartIndex] = useState(0); // Índice inicial dos produtos visíveis
    const productsPerPage = 4; // Número de produtos por página

    const handleLeftClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - productsPerPage);
        }
    };

    const handleRightClick = () => {
        if (startIndex + productsPerPage < products.length) {
            setStartIndex(startIndex + productsPerPage);
        }
    };

    return (
        <div className="ctnMax">
            <button className="arrowBtnLeft" onClick={handleLeftClick}>
                <img src={arrowLeft} className="arrow" alt="" />
            </button>
            <div className="containerCarousel">
                <div className="carousel" ref={carouselRef}>
                    {products
                        .slice(startIndex, startIndex + productsPerPage)
                        .map((item, index) => (
                            <CardProduct
                                key={index}
                                productName={item.productName}
                                descriptionShort={item.descriptionShort}
                                photo={item.photo}
                                price={item.price}
                                setSelectedProducts={setSelectedProducts}
                                setOpenModal={setOpenModal}
                            />
                        ))}
                </div>
            </div>
            <button className="arrowBtn" onClick={handleRightClick}>
                <img src={arrowRight} className="arrow" alt="" />
            </button>
        </div>
    );
}
