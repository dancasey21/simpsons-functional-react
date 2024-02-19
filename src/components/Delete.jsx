import React from "react";

const Delete = (props) => {
  const { onDeleteSimpson, id } = props;
  return (
    <div>
      <button onClick={() => onDeleteSimpson(id)}>Delete</button>
    </div>
  );
};

export default Delete;
