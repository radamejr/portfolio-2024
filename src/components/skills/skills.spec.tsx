import { fireEvent, render, screen } from "@testing-library/react";
import Skills from "./skills.component";
import * as Helpers from '../../helpers/component.helpers';

const imageIds = ["aws", "django", "js", "react", "python", "redux", "ts"];

describe("AboutMe", () => {
	const helperSpy = jest.spyOn(Helpers, "handleClick");
	beforeEach(() => {
		jest.clearAllMocks();
		jest.resetAllMocks();
	});

	it("should render", () => {
		const renderResult = render(<Skills />);
		expect(renderResult).toBeTruthy();
	});

	imageIds.forEach((id) => {
		it(`${id} image on click works`, () => {
			const renderResult = render(<Skills />);
			expect(renderResult).toBeTruthy();

			const image = screen.getByTestId(`${id} image`);
			fireEvent.click(image);
			expect(helperSpy).toBeCalled();
		});
	});
});
