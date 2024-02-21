import React from "react";
import Quote from "./Quote";
import Name from "./Name";
import Image from "./Image";
import Delete from "./Delete";
import Like from "./Like";

const Character = (props) => {
  const {
    character,
    quote,
    image,
    onDeleteSimpson,
    id,
    characterDirection,
    onLikeSimpson,
    liked,
  } = props;

  if (characterDirection === "left") {
    return (
      <>
        <Name character={character} id={id} />
        <Quote quote={quote} />
        <Image image={image} character={character} />
        <Delete onDeleteSimpson={onDeleteSimpson} />
        <Like liked={liked} onLikeSimpson={onLikeSimpson} />
      </>
    );
  }
  return (
    <>
      <Name character={character} id={id} />
      <Quote quote={quote} />
      <Image image={image} character={character} />
      <Delete onDeleteSimpson={onDeleteSimpson} />
      <Like onLikeSimpson={onLikeSimpson} />
    </>
  );
};

export default Character;
