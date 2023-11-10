import "../styles/hero.css"

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg"></div>
      <div className="hero-header">
        <img src="./src/assets/RDSHWorld.png"/>
      </div>
      <p className="hero-text">
        We make the best Rock Climbing Clothing available today.
        Made in the USA and carefully crafted for performance
        and durability; all of our items are made to withstand
        whatever you can put them through.
      </p>
    </div>
  )
}