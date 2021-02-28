import React from "react";
import { mount } from "enzyme";
import { findByAttribute } from "../../testUtils";
import Display from "./index";

// Basic testing
// mount Testing
// jest.fn()
// React.useEffect Testing

test("renders component without crashing", () => {
  const wrapper = mount(<Display func={() => console.log("Called")} />);
  const component = findByAttribute(wrapper, "componentContainer");
  expect(component.length).toBe(1);
});

test("renders correct input value on change", () => {
  const mockedProp = jest.fn();
  mount(<Display func={mockedProp} />);
  expect(mockedProp).toHaveBeenCalled();
});
