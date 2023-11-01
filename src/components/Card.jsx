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

export function CartCard({ item }) {
  return (
    <div className="cart">
      <div className="cart-image">
        <img src={item.imgUrl} alt={item.title} />
      </div>
      <div className="cart-title">{item.title}</div>
      <div className="cart-price">$ {item.price}0</div>
    </div>
  )
}