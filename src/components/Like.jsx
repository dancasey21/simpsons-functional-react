import React from "react";

const Like = (props) => {
  const { onLikeSimpson, character, liked } = props;
  return (
    <div>
      <button
        style={{ backgroundColor: liked ? "red" : "blue" }}
        onClick={() => onLikeSimpson(character)}
      >
        Like
      </button>
    </div>
  );
};

export default Like;
