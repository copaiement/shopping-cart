import { Featured } from "../components/Featured"
import { Hero } from "../components/Hero"

export function Home() {
  return (
    <div className="home">
      <Hero />
      <Featured />
    </div>
  )
}