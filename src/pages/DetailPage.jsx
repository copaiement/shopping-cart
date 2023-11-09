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
    // if entered item is not a number, or greater than 99, return
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
    // create newCart
    const newCart = [...cart];

    // if newCart already contains active item, add new quantity to old
    if (newCart.find((cartItem) => cartItem.item === active.item)) {
      const index = newCart.findIndex((cartItem) => cartItem.item === active.item);
      newCart[index].quantity += active.quantity;
      setCart(newCart);
      console.log(cart);
    } else {
      // else push active to cart
      newCart.push(active);
      setCart(newCart);
      console.log(cart);
    }

    // fire modal
    const modal = document.querySelector('.cart-add-modal');
    modal.classList.toggle('hidden');
    setTimeout(() => modal.classList.toggle('hidden'), '3000');
  }

  return (
    <div className="detail-page">
      <div className="cart-add-modal hidden">
        <img className="cart-add-img" src={item.imgUrl} alt={item.title} />
        <div className="cart-add-text">Item added to Cart</div>
      </div>
      <Link to="/catalog">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left-bold</title><path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" /></svg>
      </Link>

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
      { cart.length !== 0 ?
        <div className="go-to-cart">
          <Link to="/cart">View Cart</Link>
        </div>
      :
        <div className="go-to-cart">
        </div>
      }
    </div>
  )
}