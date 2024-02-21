import React from "react";

const Header = ({ onUserInput }, { onSimpsonsSort }) => {
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
      <div>
        <label htmlFor="sort">Sort By </label>
        <select id="sort" onChange={onSimpsonsSort}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
    </>
  );
};

export default Header;
