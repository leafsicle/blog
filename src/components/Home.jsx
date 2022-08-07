import { useState } from "react"
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Blog from the start",
      body: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      author: "M. Cooke",
      id: 1
    },
    {
      title: "second",
      body: "All of these unencumbered numbered words",
      author: "ME",
      id: 2
    }
  ])
  return (
    <div className="home">
      <BlogList blogs={blogs} title="Kitchen themed title here" />
    </div>
  )
}

export default Home
