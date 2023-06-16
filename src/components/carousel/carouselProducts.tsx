import { useRef, useState } from "react";
import { CardProduct } from "../cards/cardProduct";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import "./carouselProducts.scss";
import { Product } from "../modal/productModal";

interface CarouselProductsProps {
  products: Product[];
  setSelectedProducts: (selectedProduct: Product | null) => void;
  setOpenModal: (open: boolean) => void;
}

export function CarouselProducts({
  products,
  setSelectedProducts,
  setOpenModal,
}: CarouselProductsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 4;

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
