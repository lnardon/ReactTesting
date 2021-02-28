import React from "react";

function LanguagePicker({ setLanguage }) {
  return (
    <div>
      <h2 onClick={() => setLanguage("en")}>ENGLISH</h2>
      <h2 onClick={() => setLanguage("pt")}>PORTUGUESE</h2>
    </div>
  );
}

export default LanguagePicker;
