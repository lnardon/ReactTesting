import React from "react";
import "./App.css";
import languageContext from "./contexts/languageContext";

import LanguagePicker from "./components/LanguagePicker";
import ClickCounter from "./components/ClickCounter";

function App() {
  const [language, setLanguage] = React.useState("en");

  return (
    <div className="app">
      <languageContext.Provider value={language}>
        <LanguagePicker setLanguage={setLanguage} />
        <ClickCounter />
      </languageContext.Provider>
    </div>
  );
}

export default App;
