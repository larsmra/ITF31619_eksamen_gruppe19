import React, {useState} from 'react';

const AuthorSelector = () => {
    const [authors] = useState([
        {name: 'Lars Larsen', value: 1},
        {name: 'Gunn Gundersen', value: 2},
        {name: 'Simen Simensen', value: 3}
    ]);

    return (
        <select id='author_select' onChange={() => {}}>
            {authors.map(author => (
                <option key={author.value} value={author.value}>
                    {author.name}
                </option>
            ))}

        </select>
    );
};

export default AuthorSelector;