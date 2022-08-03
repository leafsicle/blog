import { useState } from "react"
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Blog from the start",
      body: "words",
      author: "M. Cooke",
      link: "",
      id: 1
    },
    {
      title: "second",
      body: "All of these unencumbered numbered words",
      author: "ME",
      link: "",
      id: 2
    }
  ])
  return (
    <div className="home">
      <BlogList blogs={blogs} setBlogs={setBlogs} />j
    </div>
  )
}

export default Home
