import { Link } from 'react-router-dom'
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

export function CartCard({ cartItem }) {
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
          <button>-</button>
          <input/>
          <button>+</button>
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