import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Catalog } from './pages/Catalog'
import { ShoppingCart } from './pages/ShoppingCart'
import { DetailPage } from './pages/DetailPage'
import './App.css'
import { fetchItems } from "./utils/getItems"
import { useEffect, useState } from "react"



export function App() {
  const [items, setItems] = useState([]);
  const [featured, setFeatured] = useState([]);


  useEffect(() => {
    console.log("useEffect Call");
    (async () => {
      const newItems = await fetchItems(10);
      console.log(newItems);
      setItems(newItems);
      setFeatured(newItems.slice(0,6));
    })();
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={featured} />} />
        <Route path="catalog" element={<Catalog items={items} />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="item/:itemId" element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  )
}
