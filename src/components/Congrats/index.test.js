import { shallow } from "enzyme";
import { findByAttribute } from "../../testUtils";
import Congrats from "./index";

// Basic testing
// Data test attribute usage
// Props Testing
test("renders component without crashing", () => {
  const wrapper = shallow(<Congrats />);
  const component = findByAttribute(wrapper, "componentCongrats");
  expect(component.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wrapper = shallow(<Congrats success={false} />);
  const component = findByAttribute(wrapper, "componentCongrats");
  expect(component.text()).toBe("");
});

test("renders correct text when success prop is true", () => {
  const wrapper = shallow(<Congrats success={true} message={"Success"} />);
  const message = findByAttribute(wrapper, "componentCongratsMessage");
  expect(message.text()).toBe("Success");
});
