import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import '../styles/catalog.css'

export function DetailPage({ items, cart, setCart }) {
  const { itemId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState([]);
  const item = items.find((item) => item.id === itemId);

  useEffect(() => {
    console.log('detail useeffect')
    setActive({
      item: item,
      quantity: quantity,
      total: item.price * quantity,
    });
  },[setActive, item, quantity])
  
  function manualQty(e) {
    const regex = /(^\d*$)/
    // if intered item is not a number, or greater than 99, return
    if (!regex.test(e.target.value) || e.target.value > 99) {
      return;
    } else if (regex.test(e.target.value)) {
      setQuantity(Number(e.target.value));
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

  function addToCart() {
    const newCart = [...cart];
    // check if item exists
    // if so, add new qty to existing
    // if not, push the active item as-is
    newCart.push(active);
    setCart(newCart);
    console.log(cart);
  }

  return (
    <div className="detail-page">
      <Link to="/catalog">Back</Link>

      <div className="detail-img-container">
        <img className="detail-img" src={item.imgUrl} alt={item.title} />
      </div>
      <div className="detail-info-container">
        <div className="detail-title">{item.title}</div>
        <div className="detail-desc">{item.description}</div>
        <div className="detail-price">{item.price}</div>
      </div>
      <div className="detail-qty-container">
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