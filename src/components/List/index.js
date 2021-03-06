import React from "react";

function List({ words = [] }) {
  return (
    <div data-test="componentList">
      {words.length > 0 ? (
        <div data-test="componentListTable">
          {words.map((word, index) => {
            return (
              <h1 data-test="componentWord" key={index}>
                {word}
              </h1>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default List;
