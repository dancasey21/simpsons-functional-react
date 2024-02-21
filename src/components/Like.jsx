import React from "react";

const Like = (props) => {
  const { onLikeSimpson, id, liked } = props;
  return (
    <div>
      <button
        style={{ backgroundColor: liked ? "red" : "blue" }}
        onClick={() => onLikeSimpson(id)}
      >
        Like
      </button>
    </div>
  );
};

export default Like;
