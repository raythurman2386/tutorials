import React from "react"
import { Link } from "gatsby"

// Components
import Footer from "../components/Footer"

const AboutPage = () => {
  return (
    <div>
      <h1>Hello there!</h1>
      <p>
        Hi, my name is Raymond Thurman. I am a Full Stack Web Developer. Before
        I started at Lambda School I spent ten years in the United States Army
        and led a very successful military career before I was medically
        discharged. Now I am a very ambitious trainee ready for the next big
        career change to come my way. Some of the current technologies I use
        include: HTML5, CSS3, LESS, JavaScript, React, and Python.
      </p>
      <p>
        Contact me if you would like to chat about some work!
        <Link to="/contact">Contact</Link>
      </p>
      <p>
        <Link exact to="/">
          Home
        </Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
