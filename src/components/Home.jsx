import { useState } from "react"
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Wiping down the counters",
      body: "lorem ipsum dolor sit amet",
      author: "MCooke",
      id: 1
    },
    {
      title: "Washing your hands",
      body: "lorem ipsum dolor sit",
      author: "self",
      id: 2
    },
    {
      title: "Taking out the cutting boards",
      body: "lorem ipsum dolor sit amet",
      author: "self",
      id: 3
    }
  ])
  let handleDelete = id => {}

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        blogTitle="Kitchen themed title here"
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter(blog => blog.author === "MCooke")}
        blogTitle="M. Cooke's Blogs"
      />
    </div>
  )
}

export default Home
