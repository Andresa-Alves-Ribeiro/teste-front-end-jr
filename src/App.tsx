import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header'
import { BannerPromotion } from "./components/banner/bannerPromotion";

function App() {

  return (
    <>
    <Header />
    <BannerPromotion />
      <div>
        <p>teste</p>
      </div>
    </>
  )
}

export default App
