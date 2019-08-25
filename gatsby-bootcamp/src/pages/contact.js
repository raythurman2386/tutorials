import React from "react"
import { Link } from "gatsby"

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>
        <a href="https://twitter.com/raythurman2386" target="_blank">
          Twitter
        </a>
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

export default ContactPage
