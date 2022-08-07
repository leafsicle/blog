import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders The Cutting Board", () => {
  render(<App />)
  const headerElement = screen.getByText(/The Cutting Board/i)
  expect(headerElement).toBeInTheDocument()
})
