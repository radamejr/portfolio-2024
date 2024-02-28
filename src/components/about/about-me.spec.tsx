import { fireEvent, render, screen } from "@testing-library/react";
import AboutMe from "./about-me.component";
import * as Helpers from '../../helpers/component.helpers';

const contactIds = ["linkedin", "github", "email"];

describe("AboutMe", () => {
	const helperSpy = jest.spyOn(Helpers, "handleClick");
	beforeEach(() => {
		jest.clearAllMocks();
		jest.resetAllMocks();
	});
	it("should render", () => {
		const renderResult = render(<AboutMe />);
		const text = screen.getByText(
			"Hi! My Name is Robert Adame Jr., I am a Software Engineer with a passion for creating applications both web computer based. I have knowledge and experience with creating React Apps, working in the AWS ecosystem, Django and ESRI. This diverse experience allows me to continually learn and grow and always be challened with new opportunity.",
		);

		expect(renderResult).toBeTruthy();
		expect(text).toBeTruthy();
	});

	contactIds.forEach((id) => {
		it(`${id} contact on click works`, () => {
			const renderResult = render(<AboutMe />);
			expect(renderResult).toBeTruthy();

			const image = screen.getByTestId(`contact ${id}`);
			fireEvent.click(image);
			expect(helperSpy).toBeCalled();
		});
	})
});
