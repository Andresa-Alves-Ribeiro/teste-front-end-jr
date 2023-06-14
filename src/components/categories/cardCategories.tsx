import Supermarket from "../../assets/supermarket.svg";
import Tecnologia from "../../assets/Tecnologia.svg";
import Whiskey from "../../assets/whiskey.svg";
import Tools from "../../assets/tools.svg";
import Health from "../../assets/Health.svg";
import Sports from "../../assets/Sports.svg";
import Moda from "../../assets/Moda.svg";

import "./cardCategories.scss";

const categoriesData = [
  { label: 'Tecnologia', image: Tecnologia },
  { label: 'Supermercado', image: Supermarket },
  { label: 'Bebidas', image: Whiskey },
  { label: 'Ferramentas', image: Tools },
  { label: 'Saúde', image: Health },
  { label: 'Esportes e Fitness', image: Sports },
  { label: 'Moda', image: Moda },
];

export function CardsCategories() {
  return (
    <div className="cardsCategories">
      {categoriesData.map((category, index) => (
        <div
          className={`card ${category.label === 'Tecnologia' ? 'cardTech' : ''}`}
          key={index}
        >
          <div className="cardImg">
            <img src={category.image} alt={category.label} />
          </div>
          <p>{category.label}</p>
        </div>
      ))}
    </div>
  );
}
