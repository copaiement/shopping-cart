import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Home } from "./Home"
import { Catalog } from './Catalog'
import { ShoppingCart } from './ShoppingCart'
import { DetailPage } from './DetailPage'
import '../styles/root.css'

export function Root() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="item/:itemId" element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  )
}

/* Notes
Test moving browserRouter here from the main.jsx file
main simply links to Root in order to display the page.
Routing should work but with Navbar and Footer shown

*/