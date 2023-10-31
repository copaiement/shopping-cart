import { Featured } from "../components/Featured"
import { Hero } from "../components/Hero"

export function Home({ items }) {
  return (
    <div className="home">
      <Hero />
      <Featured items={items}/>
    </div>
  )
}