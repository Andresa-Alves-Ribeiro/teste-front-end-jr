import "./bannerPromotion.scss";
import A from '../../assets/Banner.svg'

export function BannerPromotion() {
  return (
    <>
      <div className="ctnBanner">
        <div className="contents">
          <h2>Venha conhecer nossas promoções</h2>
          <p>50% Off nos produtos</p>
          <button>Ver produto</button>
        </div>
      </div>
    </>
  );
}