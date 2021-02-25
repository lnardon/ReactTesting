import React from "react";

function List({ words = [] }) {
  return (
    <div data-test="componentList">
      {words.length > 0 ? (
        <div data-test="componentListTable">
          {words.map((word) => {
            return <h1 key={word}>{word}</h1>;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default List;
