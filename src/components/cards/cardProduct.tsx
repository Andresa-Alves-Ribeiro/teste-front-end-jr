import React, { useState } from "react";
import Modal from "./modal";
import { ProductModal, Product } from "../modal/productModal";

import "./cardProducts.scss";

interface CardProductProps {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export function CardProduct({
  productName,
  descriptionShort,
  photo,
  price,
}: CardProductProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const product: Product = {
    productName,
    descriptionShort,
    photo,
    price,
  };

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
          <span className="installment">
            ou 2x de RS: 49,55 sem juros
          </span>
          <p className="delivery"> Frete grátis </p>
        </div>
        <button className="btnCard" onClick={handleOpenModal}>
          COMPRAR
        </button>
      </div>
      {openModal && (
        <ProductModal
          isOpen={openModal}
          setOpenModal={setOpenModal}
          products={product}
          setSelectedProducts={null}
        />
      )}
    </div>
  );
}
