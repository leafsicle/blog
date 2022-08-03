const BlogList = ({ blogs, setBlogs }) => {
  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id} className="blog-preview">
          <a href={blog.link}>
            <h2>{blog.title}</h2>
          </a>
          <span className="subtext">by {blog.author}</span>
          <br />
        </div>
      ))}
      <button
        onClick={() =>
          setBlogs(
            blogs.concat({
              title: "Bacon Pancakes",
              body: "Making bacon pancakes",
              author: "Jbat",
              link: "https://www.youtube.com/watch?v=cUYSGojUuAU",
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
