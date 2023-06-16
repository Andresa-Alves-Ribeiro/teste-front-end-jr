import React from "react";
import { Product } from "../modal/productModal";
import "./cardProducts.scss"

interface CardProductProps {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  setSelectedProducts: (product: Product | null) => void;
  setOpenModal: (open: boolean) => void;
}

export const CardProduct: React.FC<CardProductProps> = ({
  productName,
  descriptionShort,
  photo,
  price,
  setSelectedProducts,
  setOpenModal,
}) => {
  const handleOpenModal = () => {
    const product: Product = {
      productName,
      descriptionShort,
      photo,
      price,
    };
    setSelectedProducts(product);
    setOpenModal(true);
  };

  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="cardMax">
      <div className="ctnCard">
        <div className="ctnImgProduct">
          <img src={photo} alt="photo" />
        </div>
        <div className="ctnInfosCard">
          <p>{productName}</p>
          <p className="priceCardOld">{formattedPrice}</p>
          <p className="priceCurrent">{formattedPrice}</p>
          <span className="installment">ou 2x de RS: 49,55 sem juros</span>
          <p className="delivery">Frete grátis</p>
        </div>
        <button className="btnCard" onClick={handleOpenModal}>
          COMPRAR
        </button>
      </div>
    </div>
  );
};
