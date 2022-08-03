const BlogList = ({ blogs, setBlogs }) => {
  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id} className="blog-preview">
          <h2>{blog.title}</h2>
          by {blog.author}
        </div>
      ))}
      <button
        onClick={() =>
          setBlogs(
            blogs.concat({
              title: "",
              body: "",
              author: "",
              id: blogs.length + 1
            })
          )
        }
      >
        add a new blog!
      </button>
    </div>
  )
}

export default BlogList
