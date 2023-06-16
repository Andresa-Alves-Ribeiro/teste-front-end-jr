import React from "react";
import Modal from "./modal";
import './productModal.scss'
export interface Product {
  photo: string;
  productName: string;
  price: number;
  descriptionShort: string;
}

interface ProductModalProps {
  isOpen: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  products: Product;
  setSelectedProducts: (products: Product | null) => void;
}


export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  setOpenModal,
  products,
  setSelectedProducts,
}) => {

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProducts(null);
  };

  const formattedPrice = products
    ? products.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    : "";

  return (
    <Modal close={handleCloseModal} isOpen={isOpen}>
      {products && (
        <div className="modalCard">
          <div className="boxModalImg">
            <img src={products.photo} alt="photo" />
          </div>

          <div className="boxModalText">
            <h3>{products.productName}</h3>
            <span className="priceModalBox">{formattedPrice}</span>
            <span>{products.descriptionShort}</span>
            <span className="showMoreText">
            Veja mais detalhes do produto &gt; {" "}
            </span>
          </div>
        </div>
      )}
    </Modal>
  );
};
