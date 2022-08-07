import { useState } from "react"

const BlogList = ({ blogs, title }) => {
  const [blogList, setBlogs] = useState(blogs)
  const [title, setTitle] = useState(title)

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>by {blog.author}</p>
          {blog.body}
          <br />
        </div>
      ))}
      <button
        onClick={() =>
          setBlogs(
            blogs.concat({
              title: "Bacon Pancakes",
              body: "Bacon ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
              author: "Jbat",
              id: blogs.length + 1
            })
          )
        }
      >
        New Entry
      </button>
    </div>
  )
}

export default BlogList
