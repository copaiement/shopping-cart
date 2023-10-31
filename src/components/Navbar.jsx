import { Link } from "react-router-dom"
import '../styles/navbar.css'

export function Navbar() {
  return (
    <div className="navbar">
      <h1>This is the NAVBAR</h1>
      <Link to="/">Home</Link>
      <Link to={`catalog`}>Catalog</Link>
      <Link to={`cart`}>Shopping Cart</Link>
    </div>
  )
}