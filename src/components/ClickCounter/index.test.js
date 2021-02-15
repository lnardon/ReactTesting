import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ClickCounter from "./index";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Basic testing
// Data test attribute usage
test("renders click counter without crashing", () => {
  const wraper = shallow(<ClickCounter />);
  const coutnerComponent = wraper.find("[data-test='componentCounter']");
  expect(coutnerComponent.length).toBe(1);
});

test("counter is updating value", () => {
  const wraper = shallow(<ClickCounter />);
  expect(wraper).toBeTruthy();
});
