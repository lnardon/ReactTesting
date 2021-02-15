import React from "react";

function Congrats({ success, message }) {
  return (
    <div data-test="componentCongrats">
      <h2 data-test="componentCongratsMessage">{message}</h2>
    </div>
  );
}

export default Congrats;
