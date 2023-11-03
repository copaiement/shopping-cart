import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../styles/card.css'

export function Card({ item }) {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="card">
        <div className="card-image">
          <img src={item.imgUrl} alt={item.title} />
        </div>
        <div className="card-title">{item.title}</div>
        <div className="card-price">$ {item.price}0</div>
      </div>
    </Link>

  )
}

export function CartCard({ cart, cartItem, setCart }) {
  
  const [cartQty, setCartQty] = useState(cartItem.quantity);
  console.log(cartQty);
  
  function manualCartQty(e) {

  }

  function addCartQty() {
    console.log(cart)
    if (cartQty > 99) {
      return;
    } else {
      const newQuant = cartQty + 1;
      setCartQty(newQuant);
      const newCart = cart;
      newCart.map((item) => {
        if (item === cartItem) {
          cartItem.quantity = cartQty;
        }
      });
      console.log(newCart);
      setCart(newCart);
    }
  }

  function subCartQty() {

  }
  
  return (
    <div className="cart-card">
      <div className="cart-item-info-container">
        <div className="cart-item-image">
          <img src={cartItem.item.imgUrl} alt={cartItem.item.title} />
        </div>
        <div className="cart-item-title">{cartItem.item.title}</div>
        <div className="cart-item-price">$ {cartItem.item.price}0</div>
      </div>
      <div className="cart-item-quantity-container">
        <div className="cart-item-quantity">
          <button 
            onClick={subCartQty}
            disabled={cartQty <= 1}
          >-
          </button>
          <input  
            value={cartQty}
            onChange={manualCartQty} 
          />
          <button 
            onClick={addCartQty}
            disabled={cartQty >= 99}
          >+
          </button>
        </div>
        <div className="cart delete">

        </div>
      </div>
      <div className="cart-item-total-container">
        <div className="cart-item-total">{Number(cartItem.item.price) * cartItem.quantity}</div>
      </div>
    </div>
  )
}