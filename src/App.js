import Navbar from "./components/Navbar"
import Home from "./components/Home"
function App() {
  const title = "Blog and sandbox"

  return (
    <div className="App">
      <div className="container">
        <h1>{title}</h1>
        <Navbar />
        <Home />
      </div>
    </div>
  )
}

export default App
