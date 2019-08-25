import React from "react"

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"

// Styles
import "../styles/index.css"

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
