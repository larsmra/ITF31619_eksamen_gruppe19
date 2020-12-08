import React, { useEffect, useState } from 'react';
import { listAuthors } from '../utils/authorServices';

const AuthorSelector = ({ setData }) => {
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchAuthors = async () => {
      if (authors.length === 0) {
        const { data } = await listAuthors();
        if (data.success) {
          setAuthors(data.data.authors);
          setValue(data.data.authors[0]);
          setData((prev) => ({ ...prev, author: data.data.authors[0] }));
        } else {
          setError(data.message);
        }
      }
    };
    fetchAuthors();
  }, [authors, value, error, setData]);

  const handleAuthorChange = (e) => {
    setValue(e.target.value);
    setData((prev) => ({ ...prev, author: e.target.value }));
  };

  return (
    <select id="author" name="author" onChange={handleAuthorChange}>
      {authors &&
        authors.map((author, index) => (
          <option key={index} value={author}>
            {author}
          </option>
        ))}
    </select>
  );
};

export default AuthorSelector;
