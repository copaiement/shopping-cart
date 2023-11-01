import { Link, useParams } from "react-router-dom"

export function DetailPage({ items }) {
  const { itemId } = useParams();
  const item = items.find((item) => item.id = itemId)
  console.log(item)
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
    </div>
  )
}