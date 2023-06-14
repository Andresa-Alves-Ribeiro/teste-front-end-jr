import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header'
import { BannerPromotion } from "./components/banner/bannerPromotion";
import { CardsCategories } from "./components/categories/cardCategories";
import { ProductsRelated } from './components/productsRelated/productsRelated';
import { MenuProducts } from './components/menuProducts/menuProducts';

function App() {

  return (
    <>
    <Header />
    <BannerPromotion />
    <CardsCategories />
    <ProductsRelated />
    <MenuProducts />
    </>
  )
}

export default App
