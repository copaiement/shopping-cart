import { Link } from "react-router-dom"
import { CartCard } from "../components/Card"

export function ShoppingCart({ cart, setCart }) {
  
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
              { cart.map((item) => (
                <CartCard
                  key={item.item.id}
                  cart={cart} 
                  cartItem={item}
                  setCart={setCart} 
                />
              ))}

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