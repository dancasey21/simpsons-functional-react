import React from "react";

const Header = ({ onUserInput }) => {
  return (
    <>
      <div>
        <h1>The Simpsons</h1>
      </div>
      <div>
        <input
          onInput={onUserInput}
          type="text"
          id="search"
          name="search"
          placeholder="Search Character"
        />
      </div>
    </>
  );
};

export default Header;
