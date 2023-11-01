import { Featured } from "../components/Featured"
import { Hero } from "../components/Hero"
import '../styles/home.css'

export function Home({ items }) {
  return (
    <div className="home">
      <Hero />
      <Featured items={items}/>
    </div>
  )
}