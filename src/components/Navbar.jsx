import { Link } from "react-router-dom"
import '../styles/navbar.css'

export function Navbar({cart}) {
  return (
    <div className="navbar">
      {/* replace this image div with a Link item */}
      <Link className="navbar-link" to="/">
        <img className="navbar-logo" src="./src/assets/RDSH-Logo.avif" alt="" />
      </Link>
      <div className="searchbar">

      </div>
      <div className="navbar-links">
        <Link to={`catalog`}>Catalog</Link>
        <Link to={`cart`}>
          { cart.length === 0 ?
            <svg id="cart-icon-empty" className="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart</title><path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" /></svg>
          :
            <svg id="cart-icon-full" className="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-plus</title><path d="M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z" /></svg>
          }
        </Link>
      </div>
    </div>
  )
}