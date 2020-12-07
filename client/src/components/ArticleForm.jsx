import React, { useState} from 'react';
import styled from 'styled-components';
import AuthorSelector from './AuthorSelector';
import CategorySelector from './CategorySelector';
import CategoryButton from './CategoryButton';

const StyledForm = styled.form`
    display: flex;
    flex-flow: column nowrap;

    & > label {
    font-size: 14px;
    }

    & > input {
    }

    & > div{
        display: flex;
        justify-content: space-between;
    }
`;

const ArticleForm = ({values, handleChange}) => {

  const [modal, setModal] = useState(false);

  return (
    <StyledForm>
      <label htmlFor="article_title"> Tittel </label>
      <input
        type="text"
        id="article_title"
        name="title"
        placeholder="Skriv inn tittel"
        value={values.title}
        onChange={handleChange}
      />
      <label htmlFor="article_ingress"> Ingress </label>
      <input
        type="text"
        id="article_ingress"
        name="ingress"
        placeholder="Skriv et kort innledende avsnitt"
        value={values.ingress}
        onChange={handleChange}
      />
      <label htmlFor="article_content"> Innhold </label>
      <textarea
        type="text"
        id="article_content"
        name="content"
        placeholder="Skriv innhold"
        value={values.content}
        onChange={handleChange}
      />
      <label htmlFor="article_category"> Kategori </label>
      <div>
            <CategorySelector handleCategoryChange={handleChange} />
            <CategoryButton
            name="New category"
            clickHandler={() => setModal(!modal)}
             />
      </div>
     
      <label htmlFor="article_author"> Forfatter </label>
      <AuthorSelector handleAuthorChange={handleChange} />
    </StyledForm>
  );
};

export default ArticleForm;
