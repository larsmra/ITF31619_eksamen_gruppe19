import React from 'react';

const CategoryButton = ({ name, clickHandler }) => (
  <button id="new" type="button" onClick={clickHandler}>
    {name}
  </button>
);
export default CategoryButton;
