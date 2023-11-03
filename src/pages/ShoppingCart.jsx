import { Link } from "react-router-dom"

export function ShoppingCart({ cart }) {
  
  console.log(cart)
  
  return (
    <>  
    { cart.length === 0 ? 
        <div className="cart-page">
          <div className="cart-header">Your cart is empty</div>
          <Link className="navbar-link" to="/catalog">Continue shopping</Link>
        </div>
      :
        <div className="cart-page">
          <div className="cart-page-header">
            <div className="cart-header">Your cart</div>
            <Link className="navbar-link" to="/catalog">Continue shopping</Link>
          </div>
          <div className="cart-container">
            <div className="cart-data-headers">
              <div>Product</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
            <div className="cart">
            </div>
          </div>
          <div className="checkout-container">
            <div className="cart-subtotal">
              <div className="subtotal-text">Subtotal</div>
              <div className="subtotal"></div>
            </div>
            <div className="shipping-msg">Taxes and shipping calculated at checkout</div>
            <button className="checkout">Check out</button>
          </div>
        </div>
      }
      </>
  )
}

{/* <div className="cart-page">
<div className="cart-page-header">
  <div className="cart-header">Your cart</div>
  <Link className="navbar-link" to="/catalog">Continue shopping</Link>
</div>
<div className="cart-container">
  <div className="cart-data-headers">
    <div>Product</div>
    <div>Quantity</div>
    <div>Total</div>
  </div>
  <div className="cart">
    { cart.length === 0 ? "Your cart is empty" :
      cart.
    }
  </div>
</div>
<div className="checkout-container">
  <div className="cart-subtotal">
    <div className="subtotal-text">Subtotal</div>
    <div className="subtotal"></div>
  </div>
  <div className="shipping-msg">Taxes and shipping calculated at checkout</div>
  <button className="checkout">Check out</button>
</div>
</div> */}