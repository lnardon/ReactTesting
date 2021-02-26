import { shallow } from "enzyme";
import { findByAttribute } from "../../testUtils";
import InputField from "./index";

// Basic testing
// useState Testing

test("renders component without crashing", () => {
  const wrapper = shallow(<InputField />);
  const component = findByAttribute(wrapper, "componentContainer");
  expect(component.length).toBe(1);
});

test("renders guessed words div correctly", () => {
  const wrapper = shallow(<InputField />);
  const component = findByAttribute(wrapper, "componentListTable");
  expect(component.length).toBe(1);
});
