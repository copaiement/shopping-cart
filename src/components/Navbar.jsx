import { Link } from "react-router-dom"
import '../styles/navbar.css'

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-img"></div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">Home</Link>
        <Link to={`catalog`}>Catalog</Link>
        <Link to={`cart`}>Shopping Cart</Link>
      </div>
    </div>
  )
}