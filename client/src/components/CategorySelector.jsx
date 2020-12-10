import React, { useEffect, useState } from 'react';
import { list } from '../utils/categoryService';

const CategorySelector = ({ setData }) => {

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      if (categories.length === 0) {
        const { data } = await list();
        if (data.success) {
          setCategories(data.data);
          setValue(data.data[0]._id);
          setData((prev) => ({
            ...prev,
            category: { _id: data.data[0]._id },
          }));
        } else {
          setError(data.message);
        }
      }
    };
    fetchCategories();
  }, [categories, error, setData]);

  const handleCategoryChange = (e) => {
    setValue(e.target.value);
    setData((prev) => ({
      ...prev,
      category: { _id: e.target.value },
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
