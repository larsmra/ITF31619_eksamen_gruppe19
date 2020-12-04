import React from 'react';

const CategoryButton = ({name, clickHandler}) =(

    <button id='new' type='button' onclick={clickHandler}>
        {name}
    </button>
)
export default CategoryButton;