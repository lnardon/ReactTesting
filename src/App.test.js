import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders learn react link", () => {
  const wraper = shallow(<App />);
  expect(wraper).toBeTruthy();
});
