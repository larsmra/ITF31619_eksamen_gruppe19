import React, { useState } from 'react';
import styled from 'styled-components';
import AuthorSelector from './AuthorSelector';
import CategorySelector from './CategorySelector';
import CategoryButton from './CategoryButton';

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & > label {
    font-size: 14px;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;

  & > select {
    flex-grow: 1;
  }
`;

const ArticleForm = ({
  data,
  setData,
  modal,
  setModal = () => null,
  onSubmit = (e) => e.preventDefault(),
}) => (
  <form onSubmit={onSubmit}>
    <StyledWrapper>
      <label htmlFor="article_title">Tittel</label>
      <input
        type="text"
        id="article_title"
        name="title"
        placeholder="Skriv inn tittel"
        value={data.title}
        onChange={(e) =>
          setData((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <label htmlFor="article_ingress">Ingress</label>
      <input
        type="text"
        id="article_ingress"
        name="ingress"
        placeholder="Skriv et kort innledende avsnitt"
        value={data.ingress}
        onChange={(e) =>
          setData((prev) => ({ ...prev, ingress: e.target.value }))
        }
      />
      <label htmlFor="article_content">Innhold</label>
      <textarea
        type="text"
        id="article_content"
        name="content"
        placeholder="Skriv innhold"
        value={data.content}
        onChange={(e) =>
          setData((prev) => ({ ...prev, content: e.target.value }))
        }
      />
      <label htmlFor="article_category">Kategori</label>
      <CategoryWrapper>
        <CategorySelector setData={setData} />
        <CategoryButton
          name="New category"
          clickHandler={() => setModal(!modal)}
        />
      </CategoryWrapper>

      <label htmlFor="article_author">Forfatter</label>
      <AuthorSelector setData={setData} />
      <div>
        <input
          type="checkbox"
          id="toggle_hidden"
          name="hidden"
          onChange={(e) =>
            setData((prev) => ({ ...prev, hidden: e.target.checked }))
          }
        />
        <label htmlFor="toggle_hidden">
          Skjul artikkelen for uregistrerte brukere
        </label>
      </div>
    </StyledWrapper>
    <button type="submit">Lag</button>
  </form>
);

export default ArticleForm;
