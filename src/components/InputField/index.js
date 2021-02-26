import React, { useState } from "react";

function InputField() {
  const [name, setName] = useState("");
  return (
    <div data-test="componentContainer">
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default InputField;
