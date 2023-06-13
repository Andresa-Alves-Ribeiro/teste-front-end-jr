import ShieldCheck from "../../assets/ShieldCheck.svg";
import Truck from "../../assets/Truck.svg";
import CreditCard from "../../assets/CreditCard.svg";
import Logo from "../../assets/VtexLogo.svg";
import MagnifyingGlass from "../../assets/MagnifyingGlass.svg";
import Box from "../../assets/Box.svg";
import Heart from "../../assets/Heart.svg";
import UserCircle from "../../assets/UserCircle.svg";
import ShoppingCart from "../../assets/ShoppingCart.svg";
import CrownSimple from "../../assets/CrownSimple.svg";

import './header.scss'

export function Header() {
    return (
        <>
            <div className="container">
                <div className="topHeader">
                    <ul>
                        <li>
                            <img src={ShieldCheck} alt="ShieldCheck" /> Compra
                            <span>100% segura</span>
                        </li>
                        <li>
                            <img src={Truck} alt="Truck" />
                            <span>Frete grátis</span> acima de R$ 200
                        </li>

                        <li>
                            <img src={CreditCard} alt="CreditCard" />
                            <span>Parcele</span> suas compras
                        </li>
                    </ul>
                </div>

                <div className="searchBar">
                    <img src={Logo} alt="Vtex Logo" />
                    <label>
                        <input type="text" placeholder="O que você está buscando?" />
                        <button>
                            <img
                                src={MagnifyingGlass}
                                className="magnifyingGlass"
                                alt="MagnifyingGlass"
                            />
                        </button>
                    </label>
                    <nav>
                        <ul>
                            <li>
                                <img src={Box} alt="" />
                            </li>
                            <li>
                                <img src={Heart} alt="" />
                            </li>
                            <li>
                                <img src={UserCircle} alt="" />
                            </li>
                            <li>
                                <img src={ShoppingCart} alt="" />
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="categories">
                    <nav>
                        <ul>
                            <li>TODAS CATEGORIAS</li>
                            <li>SUPERMERCADO</li>
                            <li>LIVROS</li>
                            <li>MODA</li>
                            <li>LANÇAMENTOS</li>
                            <li className="ofertas">OFERTAS DO DIA</li>
                            <li>
                                <img src={CrownSimple} className="crown" alt="CrownSimple" />
                                ASSINATURA
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}