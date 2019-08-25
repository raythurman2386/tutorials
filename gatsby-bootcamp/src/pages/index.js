import React from "react"
import { Link } from "gatsby"

// Components
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm Ray, a full stack developer living in Indiana.</h2>
      <p>
        Nice to meet you. <Link to="/about">About me</Link>
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
      <p>
        Check out my <Link to="/blog"> Blog</Link>
      </p>
      <Footer />
    </div>
  )
}

export default HomePage
