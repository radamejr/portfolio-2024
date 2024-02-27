import React from "react";
import { render, screen } from "@testing-library/react";
import Portfolio from "./Portfolio";

test("Should render portfolio app", () => {
	const renderResult = render(<Portfolio />);
	expect(renderResult).toBeTruthy();
});
