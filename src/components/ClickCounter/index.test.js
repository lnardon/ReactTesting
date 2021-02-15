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

test("button renders", () => {
  const wraper = shallow(<ClickCounter />);
  const btn = wraper.find("[data-test='btn']");
  expect(btn.length).toBe(1);
});

test("counter is updating value", () => {
  const wraper = shallow(<ClickCounter />);
  const btn = wraper.find("[data-test='btn']");
  btn.simulate("click");
  const coutnerComponent = wraper.find("[data-test='count']");
  expect(coutnerComponent.text()).toBe("1");
});
