import React from "react";

function Display({ func }) {
  React.useEffect(() => {
    func();
  }, [func]);
  return (
    <div data-test="componentContainer">
      <h1>Display Component</h1>
    </div>
  );
}

export default Display;
