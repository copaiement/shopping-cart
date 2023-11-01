import { Card } from "./Card"
import "../styles/catalog.css"

export function Featured({ items }) {
  console.log(items)
  return (
    <div className="featured">
      <div className="featured-header">Featured Items</div>
      <div className="featured-items">
        { items.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}