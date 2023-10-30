import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <>
      <h1>This is the NAVBAR</h1>
      <Link to={`/`}>Home</Link>
      <Link to={`catalog`}>Catalog</Link>
      <Link to={`cart`}>Shopping Cart</Link>
    </>
  )
}