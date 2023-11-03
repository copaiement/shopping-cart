import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export function DetailPage({ items, addToCart, setActive }) {
  const { itemId } = useParams();
  const [quantity, setQuantity] = useState(1)
  const item = items.find((item) => item.id === itemId);

  useEffect(() => {
    setActive({
      item: item,
      quantity: quantity,
    });
    console.log('detail useEffect')
  },[setActive, item, quantity])
  
  function manualQty(e) {
    // if entered item is not a number, return
    const regex = /(^\d*$)/
    if (regex.test(e.target.value) ) {
      setQuantity(Number(e.target.value));
      console.log(Number(e.target.value));
    }
  }

  function addQty() {
    if (quantity > 99) {
      return;
    } else {
      const newQuant = quantity + 1;
      setQuantity(newQuant);
    }
  }

  function subQty() {
    if (quantity === 1) {
      return;
    } else {
      const newQuant = quantity - 1;
      setQuantity(newQuant);
    }
  }

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
      <div className="detail-qty-container">
        {/* add quantity counter here */}
        <button 
          onClick={subQty}
          disabled={quantity <= 1}
        >-
        </button>
        <input  
          value={quantity}
          onChange={manualQty} 
        />
        <button 
          onClick={addQty}
          disabled={quantity >= 99}
        >+
        </button>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}