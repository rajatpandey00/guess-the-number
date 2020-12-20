import React from "react";
import renderer from "react-test-renderer";
import InputPanel from "../inputPanel";

describe("InputPanel test", () => {
	test("snapshot renders", () => {
		const component = renderer.create(<InputPanel/>);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

