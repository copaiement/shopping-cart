import '../styles/card.css'

export function Card({ item }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.featuredImage.url} alt={item.title} />
      </div>
      <div className="card-title">{item.title}</div>
      <div className="card-price">$ {item.variants.edges[0].node.price.amount}0</div>
    </div>
  )
}

export function CartCard({ item }) {
  return (
    <div className="cart">
      <div className="cart-image">
        <img src={item.featuredImage.url} alt={item.title} />
      </div>
      <div className="cart-title">{item.title}</div>
      <div className="cart-price">$ {item.variants.edges[0].node.price.amount}0</div>
    </div>
  )
}