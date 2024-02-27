import { render, screen } from "@testing-library/react"
import Work from "./work.component"

describe('AboutMe', () => {
    it('should render', () => {
        const renderResult = render(<Work />)
        const text = screen.getByText('Contributions:')
        expect(renderResult).toBeTruthy();
        expect(text).toBeTruthy()
    })
})