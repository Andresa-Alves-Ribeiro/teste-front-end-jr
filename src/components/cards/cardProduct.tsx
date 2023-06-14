import "./cardProducts.scss";

interface CardProductProps {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
    setSelectedProducts: (selectedProduct: SelectedProduct) => void;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

export interface SelectedProduct {
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
    setSelectedProducts,
    openModal,
    setOpenModal,
  }: CardProductProps) {
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
            <p className="delivery"> Frete grátis </p>
          </div>
          <button
            className="btnCard"
            onClick={() => {
              setOpenModal(true);
              setSelectedProducts({
                productName,
                descriptionShort,
                photo,
                price,
              });
            }}
          >
            COMPRAR
          </button>
        </div>
      </div>
    );
  }
  
