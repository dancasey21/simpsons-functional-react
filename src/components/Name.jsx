import React from "react";

const Name = (props) => {
  const { character } = props;

  return (
    <div>
      <h1>{character}</h1>
    </div>
  );
};

export default Name;
