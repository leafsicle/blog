import React from "react"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Cookie Dough</h1>
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/new_post">New post</a>
        </li>
        <li>
          <a href="/things">Link!</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
