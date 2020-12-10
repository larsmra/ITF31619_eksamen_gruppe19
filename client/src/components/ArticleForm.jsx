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
  edit,
  articleData,
  setArticleData,
  categories,
  modal,
  setModal,
  onSubmit,
}) => (
  <>
    <form encType="multipart/form-data" method="post" onSubmit={onSubmit}>
      <StyledWrapper>
        {console.log(articleData.title || '')}
        <label htmlFor="article_title">Tittel</label>
        <input
          type="text"
          id="article_title"
          name="title"
          placeholder="Skriv inn tittel"
          value={articleData.title || ''}
          onChange={(e) =>
            setArticleData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <label htmlFor="article_ingress">Ingress</label>
        <input
          type="text"
          id="article_ingress"
          name="ingress"
          placeholder="Skriv et kort innledende avsnitt"
          value={articleData.ingress || ''}
          onChange={(e) =>
            setArticleData((prev) => ({ ...prev, ingress: e.target.value }))
          }
        />
        <label htmlFor="article_content">Innhold</label>
        <textarea
          type="text"
          id="article_content"
          name="content"
          placeholder="Skriv innhold"
          value={articleData.content || ''}
          onChange={(e) =>
            setArticleData((prev) => ({ ...prev, content: e.target.value }))
          }
        />
        <label htmlFor="article_category">Kategori</label>
        <CategoryWrapper>
          <CategorySelector
            value={articleData.category || ''}
            setData={setArticleData}
            data={articleData}
            categories={categories}
          />
          <CategoryButton
            name="New category"
            clickHandler={() => setModal(!modal)}
          />
        </CategoryWrapper>
        <label htmlFor="article_author">Forfatter</label>
        <AuthorSelector setData={setArticleData} />
        {!edit && (
          <div>
            <label htmlFor="article_image">Bilde</label>
            <input
              type="file"
              id="article_image"
              name="image"
              accept="image/*"
              onChange={(e) =>
                setArticleData((prev) => ({
                  ...prev,
                  image: e.target.files[0],
                }))
              }
            />
          </div>
        )}
        <div>
          <input
            type="checkbox"
            id="toggle_hidden"
            name="hidden"
            checked={articleData.hidden || ''}
            onChange={(e) =>
              setArticleData((prev) => ({ ...prev, hidden: e.target.checked }))
            }
          />
          <label htmlFor="toggle_hidden">
            Skjul artikkelen for uregistrerte brukere
          </label>
        </div>
      </StyledWrapper>
      <button type="submit">Lag</button>
    </form>
  </>
);

export default ArticleForm;
