/* REACT TESTING LIBRARY TESTS */
import { render, screen } from "@testing-library/react"
import App from "./App"

describe(App, () => {
    it("app renders without crashing", () => {
        render(<App />)
        const headerElem = screen.getByRole("heading", { name: "School dashboard" })
        expect(headerElem).toBeInTheDocument()
    })

})
