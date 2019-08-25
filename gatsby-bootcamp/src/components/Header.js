import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header style={flexStyles}>
      <h1>Raymond's Portfolio</h1>
      <nav>
        <ul style={flexStyles}>
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const flexStyles = {
  display: "flex",
  "justify-content": "space-between",
  "align-items": "center",
  "list-style": "none",
}

export default Header
