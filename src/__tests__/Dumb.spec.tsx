import {render, screen} from "@testing-library/react"


describe("Dumb test", () => {
  it("renders div element", () => {
    const text = "Some Text"
    render(<div>{text}</div>)
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(screen.getByText(text)).toMatchSnapshot()
  })
})
