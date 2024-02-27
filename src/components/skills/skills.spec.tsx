import { fireEvent, render, screen } from "@testing-library/react";
import Skills from "./skills.component";

const imageIds = ["aws", "django", "js", "react", "python", "redux", "ts"];

describe("AboutMe", () => {
	const windowSpy = jest.spyOn(window, "open");
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
			expect(windowSpy).toBeCalled();
		});
	});
});
