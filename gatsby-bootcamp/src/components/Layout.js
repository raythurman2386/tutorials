import React from "react"

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"

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
