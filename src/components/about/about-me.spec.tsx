import { render, screen } from "@testing-library/react"
import AboutMe from "./about-me.component"

describe('AboutMe', () => {
    it('should render', () => {
        const renderResult = render(<AboutMe />)
        const text = screen.getByText('Hi! My Name is Robert Adame Jr., I am a Software Engineer with a passion for creating applications both web computer based. I have knowledge and experience with creating React Apps, working in the AWS ecosystem, Django and ESRI. This diverse experience allows me to continually learn and grow and always be challened with new opportunity.')
        
        expect(renderResult).toBeTruthy();
        expect(text).toBeTruthy()
    })
})