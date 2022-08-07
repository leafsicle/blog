import React from "react"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="links">
        <li>
          <a
            href="/"
            title="The prep table is the main page of the site. Where all of the recipes, tools, and treats can be found."
          >
            Prep Table
          </a>
        </li>
        <li>
          <a
            href="/sketchbook"
            title="sketchbook is likened to an artists sketchbook; ideas and studies are organized thematically"
          >
            Sketchbook
          </a>
        </li>
        <li>
          <a
            href="/walk-in"
            title="The walk-in is treated as a collection of portfolio pieces 'ready to be served'!"
          >
            Walk-in
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
