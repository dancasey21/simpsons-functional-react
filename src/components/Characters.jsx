import React from "react";
import Character from "./Character";

const Characters = (props) => {
  const { onDeleteSimpson, simpsons, onLikeSimpson } = props;

  return simpsons.map((item) => {
    return (
      <div>
        <Character
          liked={item.liked}
          character={item.character}
          quote={item.quote}
          image={item.image}
          onDeleteSimpson={onDeleteSimpson}
          onLikeSimpson={onLikeSimpson}
        />
      </div>
    );
  });
};

export default Characters;
