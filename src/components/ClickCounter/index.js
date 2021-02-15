import React, { useState } from "react";

function ClickCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <div data-test="componentCounter">
      <h1>Click Counter</h1>
      <h3>{counter} clicks</h3>
      <button onClick={() => setCounter(counter + 1)}>ADD</button>
    </div>
  );
}

export default ClickCounter;
