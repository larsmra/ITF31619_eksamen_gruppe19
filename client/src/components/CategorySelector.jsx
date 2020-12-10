import React from 'react';

const CategorySelector = ({ setData, categories }) => {
  const handleCategoryChange = (e) => {
    setData((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };

  return (
    <select onChange={handleCategoryChange}>
      {categories.map((category) => (
        <option key={category._id} value={category._id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
