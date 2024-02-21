import React from "react";
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="Bart">Bart</Link>
      <Link to="Homer">Homer</Link>
      <Link to="Lisa">Lisa</Link>
      <Link to="Marge">Marge</Link>
    </div>
  );
};

export default Nav;
