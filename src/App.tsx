import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { BannerPromotion } from "./components/banner/bannerPromotion";
import { CardsCategories } from "./components/categories/cardCategories";
import { ProductsRelated } from './components/productsRelated/productsRelated';
import { MenuProducts } from './components/menuProducts/menuProducts';
import { CarouselProducts } from './components/carousel/carouselProducts';
import { fetchProducts, Product } from './utils/products';
import { CardsPartners } from './components/cardsPartners/cardsPartners';
import { CardsProducts } from './components/cardsProducts/cardsProducts';
import { CarouselBrands } from './components/carousel/carouselBrands';
import { brandsLogo } from './utils/brandsLogo';
import { Footer } from './components/footer/footer';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    }
  };

  return (
    <>
      <Header />
      <BannerPromotion />
      <CardsCategories />
      <ProductsRelated />
      <MenuProducts />
      <CarouselProducts
        products={products}
      />
      <CardsPartners />
      <ProductsRelated text="Ver todos" />
      <CarouselProducts
        products={products}
      />
      <CardsProducts />
      <CarouselBrands brandsLogo={brandsLogo} />
      <ProductsRelated text="Ver todos" />
      <CarouselProducts
        products={products}
        style={{ marginBottom: '18vh' }}
      />
      <Footer />
    </>
  );
}

export default App;
