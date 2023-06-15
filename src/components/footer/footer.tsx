import "./footer.scss";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";

import visa from "../../assets/visa.svg";
import elo from "../../assets/elo.svg";
import alelo from "../../assets/alelo.svg";
import dinners from "../../assets/dinners.svg";
import ifood from "../../assets/ifood.svg";
import mastercard from "../../assets/mastercard.svg";
import pix from "../../assets/pix.svg";
import amex from "../../assets/amex.svg";
import ticket from "../../assets/ticket.svg";
import sodexo from "../../assets/sodexo.svg";
import econverse from "../../assets/econverse.svg";
import vtex from "../../assets/vtex.svg";

interface BrandLogo {
    photo: string;
    title: string;
}

interface FooterProps {
    brandsLogo: BrandLogo[];
}

export interface FooterInfo {
    title: string;
    items: string[];
}

export interface PaymentMethod {
    logo: string;
    alt: string;
}

export interface RegisterNews {
    title: string;
    description: string;
    placeholder: string;
}

export function Footer({ brandsLogo }: FooterProps): JSX.Element {
    const footerInfos: FooterInfo[] = [
        {
            title: "SOBRE NÓS",
            items: ["CONHEÇA", "COMO COMPRAR", "INDICAÇÃO E DESCONTO"],
        },
    ];

    const informations: FooterInfo = {
        title: "INFORMAÇÕES ÚTEIS",
        items: [
            "FALE CONOSCO",
            "DÚVIDAS",
            "PRAZO DE ENTREGA",
            "FORMAS DE PAGAMENTO",
            "POLÍTICA DE PRIVACIDADE",
            "TROCA E DEVOLUÇÕES",
        ],
    };

    const paymentMethods: PaymentMethod[] = [
        { logo: visa, alt: "Visa" },
        { logo: elo, alt: "Elo" },
        { logo: alelo, alt: "Alelo" },
        { logo: dinners, alt: "Dinners" },
        { logo: ifood, alt: "iFood" },
        { logo: mastercard, alt: "Mastercard" },
        { logo: pix, alt: "Pix" },
        { logo: amex, alt: "Amex" },
        { logo: ticket, alt: "Ticket" },
        { logo: sodexo, alt: "Sodexo" },
    ];

    const registerNews: RegisterNews = {
        title: "Cadastre-se e receba nossas",
        description: "novidades e promoções",
        span: "Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum",
        placeholder: "seu e-mail"
    };

    return (
        <>
            <div className="ctnFooter">
                <div className="ctnTop">
                    {footerInfos.map((info, index) => (
                        <div className="aboutMe" key={index}>
                            <h2 className="titleFooter  aboutText">{info.title}</h2>
                            <div className="ctnInfos">
                                <nav>
                                    <ul>
                                        {info.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className="ctnImgs">
                                <img src={facebook} alt="facebook" />
                                <img src={instagram} alt="instagram" />
                                <img src={youtube} alt="youtube" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="aboutMe">
                    <h2 className="titleFooter text">{informations.title}</h2>
                    <div className="ctnInfos">
                        <nav>
                            <ul>
                                <li>{informations.items[0]}</li>
                                <li>{informations.items[1]}</li>
                                <li>{informations.items[2]}</li>
                                <li>{informations.items[3]}</li>
                                <li>{informations.items[4]}</li>
                                <li>{informations.items[5]}</li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="aboutMe">
                    <h2 className="titleFooter">FORMAS DE PAGAMENTO</h2>
                    <div className="creditCards">
                        {paymentMethods.map((method, index) => (
                            <img key={index} src={method.logo} alt={method.alt} />
                        ))}
                    </div>
                </div>

                <div className="ctnRegisterNews">
                    <div>
                        <h2>
                            {registerNews.title} <b>{registerNews.description}</b>
                        </h2>
                        <span>{registerNews.span}</span>
                        <label className="sendGroup">
                            <input type="text" placeholder={registerNews.placeholder} />
                            <button>OK</button>
                        </label>
                    </div>
                </div>
            </div>

            <div className="ctnBottom">
                <div className="ctnMid">
                    <div className="ctnTextFooter">
                        <span>
                            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
                            suas imagens são de propriedade de seus respectivos donos. É
                            vedada a reprodução, total ou parcial, de qualquer conteúdo sem
                            expressa autorização.
                        </span>
                    </div>

                    <div className="ctnLogos">
                        <ul>
                            <li>
                                <img src={econverse} alt="Logo Econverse" />
                            </li>
                            <li>
                                <img src={vtex} alt="Logo Vtex" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
