import React from "react";

function InputField() {
  const [name, setName] = React.useState("");
  return (
    <div data-test="componentContainer">
      <label htmlFor="name">Name</label>
      <input
        data-test="componentInput"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default InputField;
