import { Card } from "../components/Card"
import "../styles/catalog.css"

export function Catalog({ items }) {
  return (
    <div className="catalog">
      <div className="catalog-header">All Items</div>
      <div className="catalog-items">
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