import React from "react"
import { useState } from "react"

const Home = () => {
  const [name, setName] = useState("Matt")
  let handleClick = newname => {
    setName(newname)
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <p>{name}</p>
      <button onClick={() => handleClick("Beans")}>Change Name</button>
    </div>
  )
}

export default Home
