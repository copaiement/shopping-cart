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
  const [cart, setCart] = useState([]);
  const [active, setActive] = useState({})

  function addToCart() {
    const newCart = cart;
    newCart.push(active);
    setCart(newCart);
    console.log(cart)
  }

  // initial API call on mount
  useEffect(() => {
    (async () => {
      const newItems = await fetchItems(10);
      setItems(newItems);
      setFeatured(newItems.slice(0,6));
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={featured} />} />
        <Route path="catalog" element={<Catalog items={items} />} />
        <Route path="cart" element={<ShoppingCart items={cart}/>} />
        <Route path="item/:itemId" element={<DetailPage items={items} addToCart={addToCart} setActive={setActive}/>} />
      </Routes>
      <Footer />
    </>
  )
}
