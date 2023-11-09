import { Link } from 'react-router-dom'
import '../styles/card.css'

export function Card({ item }) {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="card">
        <div className="card-image">
          <img className="card-img" src={item.imgUrl} alt={item.title} />
        </div>
        <div className="card-title">{item.title}</div>
        <div className="card-price">$ {item.price}0</div>
      </div>
    </Link>

  )
}

export function CartCard({ cart, cartItem, setCart }) {

  function manualCartQty(e) {
    const regex = /(^\d*$)/
    // if intered item is not a number, or greater than 99, return
    if (!regex.test(e.target.value) || e.target.value > 99) {
      return;
    } else if (regex.test(e.target.value)) {
      const newCart = [...cart];
      newCart.map((arrItem) => {
        if (arrItem === cartItem) {
          cartItem.quantity = Number(e.target.value);
          cartItem.total = cartItem.quantity * cartItem.item.price;
        }
      })
      setCart(newCart);
    }
  }

  function addCartQty() {
    if (cartItem.quantity > 99) {
      return;
    } else {
      const newCart = [...cart];
      newCart.map((arrItem) => {
        if (arrItem === cartItem) {
          cartItem.quantity += 1;
          cartItem.total = cartItem.quantity * cartItem.item.price;
        }
      })
      setCart(newCart);
      console.log(cart);
    }
  }

  function subCartQty() {
    if (cartItem.quantity <= 1) {
      return;
    } else {      
      const newCart = [...cart];
      newCart.map((arrItem) => {
        if (arrItem === cartItem) {
          cartItem.quantity -= 1;
          cartItem.total = cartItem.quantity * cartItem.item.price;
        }
      })
      setCart(newCart);
    }
  }

  function deleteFromCart() {
    const newCart = cart.filter((item) => item !== cartItem);
    setCart(newCart);
  }
  
  return (
    <div className="cart-card">
      <Link to={`/item/${cartItem.item.id}`}>
        <div className="cart-item-info-container">
          <img className="cart-item-image" src={cartItem.item.imgUrl} alt={cartItem.item.title} />
          <div className="cart-item-info-right">
            <div className="cart-item-title">{cartItem.item.title}</div>
            <div className="cart-item-price">$ {cartItem.item.price}0</div>
          </div>
        </div>
      </Link>
      <div className="cart-item-quantity-container">
        <div className="cart-item-quantity">
          <button 
            onClick={subCartQty}
            disabled={cartItem.quantity <= 1}
          >-
          </button>
          <input 
            className="cart-qty-input" 
            value={cartItem.quantity}
            onChange={manualCartQty} 
          />
          <button 
            onClick={addCartQty}
            disabled={cartItem.quantity >= 99}
          >+
          </button>
        </div>
        <div className="cart delete">
          <button
              onClick={deleteFromCart}
            >
              {/* ADD TRASH ICON */}
              DELETE
            </button>
        </div>
      </div>
      <div className="cart-item-total-container">
        <div className="cart-item-total">{'$ '+ cartItem.quantity * cartItem.item.price +'.00'}</div>
      </div>
    </div>
  )
}

export function ResultCard({ result }) {
  return (
    <div className="result-card">
      <div className="result-name">{ result.title }</div>
    </div>
  )
}