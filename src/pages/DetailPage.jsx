import { Link, useParams } from "react-router-dom"
import { useEffect } from "react";

export function DetailPage({ items, addToCart, setActive }) {
  const { itemId } = useParams();
  
  const item = items.find((item) => item.id === itemId);

  useEffect(() => {
    setActive(item);
    console.log('detail useEffect')
  })
  

  return (
    <div className="detail-page">
      <Link to="/">Home</Link>
      <div className="detail-img-container">
        <img src={item.imgUrl} alt={item.title} />
      </div>
      <div className="detail-info-container">
        <div className="detail-title">{item.title}</div>
        <div className="detail-desc">{item.description}</div>
        <div className="detail-price">{item.price}</div>
      </div>
      <div className="cart-container">
        {/* add quantity counter here */}
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}