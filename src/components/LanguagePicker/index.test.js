import React from "react";
import { mount } from "enzyme";
import { findByAttribute } from "../../testUtils";

import LanguagePicker from "./index";
import LanguageContext from "../../contexts/languageContext";

// Basic testing
// jest.fn()
// React.useContext Testing

test("renders component without crashing", () => {
  const wrapper = mount(<LanguagePicker />);
  const component = findByAttribute(wrapper, "componentContainer");
  expect(component.length).toBe(1);
});

test("renders correct input value on change", () => {
  let lng = "en";
  const setLng = (e) => {
    lng = e;
  };
  const wrapper = mount(
    <LanguageContext.Provider value={lng}>
      <LanguagePicker setLanguage={setLng} />
    </LanguageContext.Provider>
  );
  const input = findByAttribute(wrapper, "componentPTLng");
  input.simulate("click");
  expect(lng).toBe("pt");
});
