import React from "react";

import languageContext from "../../contexts/languageContext";

function LanguagePicker({ setLanguage }) {
  const lng = React.useContext(languageContext);
  return (
    <div data-test="componentContainer">
      <h1>Current Language: {lng}</h1>
      <h2 onClick={() => setLanguage("en")}>ENGLISH</h2>
      <h2 data-test="componentPTLng" onClick={() => setLanguage("pt")}>
        PORTUGUESE
      </h2>
    </div>
  );
}

export default LanguagePicker;
