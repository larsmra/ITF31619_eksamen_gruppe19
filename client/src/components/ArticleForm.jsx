import React, { useState } from 'react';
import styled from 'styled-components';
import AuthorSelector from './AuthorSelector';
import CategorySelector from './CategorySelector';
import CategoryButton from './CategoryButton';

const StyledForm = styled.form`
  & > label {
    font-size: 14px;
  }

  & > input {
  }
`;

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [ingress, setIngress] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [modal, setModal] = useState(false);

  return (
    <StyledForm>
      <label htmlFor="article_title"> Tittel </label>
      <input
        type="text"
        id="article_title"
        placeholder="Skriv inn tittel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="article_ingress"> Ingress </label>
      <input
        type="text"
        id="article_ingress"
        placeholder="Skriv et kort innledende avsnitt"
        value={ingress}
        onChange={(e) => setIngress(e.target.value)}
      />
      <label htmlFor="article_content"> Innhold </label>
      <textarea
        type="text"
        id="article_content"
        placeholder="Skriv innhold"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label htmlFor="article_category"> Kategori </label>
      <CategorySelector handleChange={(e) => setCategory(e.target.value)} />
      <CategoryButton
        name="New category"
        clickHandler={() => setModal(!modal)}
      />
      <label htmlFor="article_author"> Forfatter </label>
      <AuthorSelector />
    </StyledForm>
  );
};

export default ArticleForm;
