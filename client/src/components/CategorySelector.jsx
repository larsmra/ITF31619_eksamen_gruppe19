import React, {useState} from 'react';

const CategorySelector = ( {handleCategoryChange}) => {
    /*Temporarily dummy information to fill the select*/
    const [categories] = useState([
        {name: 'Bad', value: 1},
        {name: 'Kjøkken', value: 2}
    ]);

    return (
        <select id='category_select' name="category" onChange={() => {handleAuthorChange}}>
            <option value="" disabled selected hidden>Chose an category</option>
            {categories.map(category => (
                <option key={category.value} value={category.name}>
                    {category.name}
                </option>
            ))}

        </select>
    );
};

export default CategorySelector;
