export function Card({ item }) {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-title">{item.title}</div>
      <div className="card-price"></div>
    </div>
  )
}