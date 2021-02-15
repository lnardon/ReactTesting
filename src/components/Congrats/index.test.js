import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByAttribute } from "../../testUtils";
import Congrats from "./index";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Basic testing
// Data test attribute usage
// Props Testing
test("renders component without crashing", () => {
  const wraper = shallow(<Congrats />);
  const component = findByAttribute(wraper, "componentCongrats");
  expect(component.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wraper = shallow(<Congrats success={false} />);
  const component = findByAttribute(wraper, "componentCongrats");
  expect(component.text()).toBe("");
});

test("renders correct text when success prop is true", () => {
  const wraper = shallow(<Congrats success={true} message={"Success"} />);
  const message = findByAttribute(wraper, "componentCongratsMessage");
  expect(message.text()).toBe("Success");
});
