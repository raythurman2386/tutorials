import React from "react"
import { Link } from "gatsby"

// Components
import Footer from "../components/Footer"

const BlogPage = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <p>Posts will show here later on!!</p>
      <p>
        <Link exact to="/">
          Home
        </Link>
      </p>
      <Footer />
    </div>
  )
}

export default BlogPage

//
// Goal: Create an about page and a contact page
//
// 1. Create an about page. Include a page title and bio.
// 2. Create a contact page. Include a page title and details
// 3. Test your work
