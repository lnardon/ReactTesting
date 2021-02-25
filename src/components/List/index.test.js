import { shallow } from "enzyme";
import { findByAttribute } from "../../testUtils";
import List from "./index";

// Basic testing
// Data test attribute usage
// Props Testing
test("renders component without crashing", () => {
  const wrapper = shallow(<List />);
  const component = findByAttribute(wrapper, "componentList");
  expect(component.length).toBe(1);
});

test("renders no guessed words div when none is providfed", () => {
  const wrapper = shallow(<List words={[]} />);
  const component = findByAttribute(wrapper, "componentListTable");
  expect(component.length).toBe(0);
});

test("renders guessed words div correctly", () => {
  const wrapper = shallow(<List words={["apple", "watermelon"]} />);
  const component = findByAttribute(wrapper, "componentListTable");
  expect(component.length).toBe(1);
});

test("renders correct number of guessed words", () => {
  const wrapper = shallow(<List words={["apple", "watermelon", "orange"]} />);
  const component = findByAttribute(wrapper, "componentWord");
  expect(component.length).toBe(3);
});
