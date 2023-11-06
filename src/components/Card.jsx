import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
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
  // item constants
  const price = Number(cartItem.item.price);

  const [cartQty, setCartQty] = useState(cartItem.quantity);
  const [total, setTotal] = useState(price * cartItem.quantity);

  function manualCartQty(e) {
    const regex = /(^\d*$)/
    // if intered item is not a number, or greater than 99, return
    if (!regex.test(e.target.value) || e.target.value > 99) {
      return;
    } else if (regex.test(e.target.value)) {
      let num = Number(e.target.value)
      setCartQty(num);
      setTotal(num * price);
      const newCart = cart;
      newCart.map((item) => {
        if (item === cartItem) {
          cartItem.quantity = cartQty;
        }
      });
      setCart(newCart);
    }
  }

  function addCartQty() {
    if (cartQty > 99) {
      return;
    } else {
      const newQuant = cartQty + 1;
      setCartQty(newQuant);
      setTotal(newQuant * price);
      const newCart = cart;
      newCart.map((item) => {
        if (item === cartItem) {
          cartItem.quantity = cartQty;
        }
      });
      setCart(newCart);
    }
  }

  function subCartQty() {
    if (cartQty <= 1) {
      return;
    } else {
      const newQuant = cartQty - 1;
      setCartQty(newQuant);
      setTotal(newQuant * price);
      const newCart = cart;
      newCart.map((item) => {
        if (item === cartItem) {
          cartItem.quantity = cartQty;
        }
      });
      setCart(newCart);
    }
  }

  function deleteFromCart() {
    const newCart = cart.filter((item) => item !== cartItem);
    setCart(newCart);
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
          <button
            onClick={deleteFromCart}
          >
            {/* ADD TRASH ICON */}
            DELETE
          </button>
        </div>
        <div className="cart delete">

        </div>
      </div>
      <div className="cart-item-total-container">
        <div className="cart-item-total">{'$ '+total+'.00'}</div>
      </div>
    </div>
  )
}