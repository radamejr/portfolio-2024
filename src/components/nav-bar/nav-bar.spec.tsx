import { fireEvent, render, screen } from "@testing-library/react";
import { typeMock } from "../../utils/utils";
import NavBar from "./nav-bar.component";

const buttonIds = ["me", "work", "skill"];

describe("AboutMe", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		jest.resetAllMocks();
	});

	it("should render", () => {
		const renderResult = render(<NavBar />);
		const text = screen.getByText("Home");
		expect(renderResult).toBeTruthy();
		expect(text).toBeTruthy();
	});

	buttonIds.forEach((id) => {
		it(`${id} button on click triggers scroll`, () => {
			const scrollIntoViewSpy = jest.fn();
			const elementSpy = jest.spyOn(document, "getElementById").mockReturnValue(
				typeMock<HTMLElement>({
					scrollIntoView: scrollIntoViewSpy,
				}),
			);
			const renderResult = render(<NavBar />);
			expect(renderResult).toBeTruthy();

			const button = screen.getByTestId(`${id} button`);
			fireEvent.click(button);
			expect(scrollIntoViewSpy).toBeCalled();
		});
	});
	it("should handle not finding the element to scroll to", () => {
		const docSpy = jest.spyOn(document, "getElementById").mockReturnValue(null);
		const renderResult = render(<NavBar />);
		expect(renderResult).toBeTruthy();

		const button = screen.getByTestId("me button");
		fireEvent.click(button);
		expect(docSpy).toBeCalled();
	});
});
