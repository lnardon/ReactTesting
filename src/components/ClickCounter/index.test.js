import { shallow } from "enzyme";
import ClickCounter from "./index";

// Basic testing
// Data test attribute usage
test("renders click counter without crashing", () => {
  const wrapper = shallow(<ClickCounter />);
  const coutnerComponent = wrapper.find("[data-test='componentCounter']");
  expect(coutnerComponent.length).toBe(1);
});

test("button renders", () => {
  const wrapper = shallow(<ClickCounter />);
  const btn = wrapper.find("[data-test='btn']");
  expect(btn.length).toBe(1);
});

test("counter is updating value", () => {
  const wrapper = shallow(<ClickCounter />);
  const btn = wrapper.find("[data-test='btn']");
  btn.simulate("click");
  const coutnerComponent = wrapper.find("[data-test='count']");
  expect(coutnerComponent.text()).toBe("1");
});
