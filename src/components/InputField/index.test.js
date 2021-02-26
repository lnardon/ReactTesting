import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../testUtils";
import InputField from "./index";

// Basic testing
// jest.fn()
// React.useState Testing

test("renders component without crashing", () => {
  const wrapper = shallow(<InputField />);
  const component = findByAttribute(wrapper, "componentContainer");
  expect(component.length).toBe(1);
});

test("renders correct input value on change", () => {
  const mockedInfo = jest.fn();
  React.useState = jest.fn(() => ["", mockedInfo]);

  const wrapper = shallow(<InputField />);
  const input = findByAttribute(wrapper, "componentInput");
  input.simulate("change", { target: { value: "test" } });

  expect(mockedInfo).toHaveBeenCalledWith("test");
});
