import "./bannerPromotion.scss";
import A from '../../assets/Banner.svg'


interface BannerPromotionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
}


export function BannerPromotion() {
  return (
    <>
      <div className="banner">
        <div className="contents">
          <h2>Venha conhecer nossas promoções</h2>
          <p>50% Off nos produtos</p>
          <button>Ver produto</button>
        </div>
      </div>
    </>
  );
}