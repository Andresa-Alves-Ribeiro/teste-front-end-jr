import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { BannerPromotion } from "./components/banner/bannerPromotion";
import { CardsCategories } from "./components/categories/cardCategories";
import { ProductsRelated } from './components/productsRelated/productsRelated';
import { MenuProducts } from './components/menuProducts/menuProducts';
import { CarouselProducts } from './components/carousel/carouselProducts';
import Modal from './components/modal/modal';
import { fetchProducts, Product } from './utils/products';
import { CardsPartners } from './components/cardsPartners/cardsPartners';
import { CardsProducts } from './components/cardsProducts/cardsProducts';
import { CarouselBrands } from './components/carousel/carouselBrands';
import { brandsLogo } from './utils/brandsLogo';
import { Footer } from './components/footer/footer';

const uid = (() => {
  let i = 0;
  return () => `${i++}`;
})();

function App() {
  const [modals, setModals] = useState<React.ReactNode[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [openModal, setOpenModal] = useState(false);
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

  const actions = {
    push(node: React.ReactNode) {
      const key = uid();

      const close = () => {
        setModals((modals: React.ReactNode[]) => {
          return modals.filter((modal) => (modal as any).key !== key);
        });
      };

      const modal = (
        <Modal key={key} close={close}>
          {node}
        </Modal>
      );
      setModals((modals: React.ReactNode[]) => [...modals, modal]);
    },
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
        setSelectedProducts={setSelectedProducts}
        setOpenModal={setOpenModal}
      />
      <CardsPartners />
      <ProductsRelated text="Ver todos" />
      <CarouselProducts
        products={products}
        setSelectedProducts={setSelectedProducts}
        setOpenModal={setOpenModal}
      />
      <CardsProducts />
      <CarouselBrands brandsLogo={brandsLogo} />
      <ProductsRelated text="Ver todos" />
      <CarouselProducts
        products={products}
        setSelectedProducts={setSelectedProducts}
        setOpenModal={setOpenModal}
      />
      <Footer />
    </>
  );
}

export default App;
