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

const ArticleForm = ({userInput, setUserInput}) => {
  /*
  const [title, setTitle] = useState('');
  const [ingress, setIngress] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  */
  const [modal, setModal] = useState(false);

  const updateArticleValue = (evt) => {
    const { name, value } = evt.target;
    setUserInput({ [name]: value });
  };

  return (
    <StyledForm>
      <label htmlFor="article_title"> Tittel </label>
      <input
        type="text"
        id="article_title"
        name="title"
        placeholder="Skriv inn tittel"
        value={userInput.title}
        onChange={updateArticleValue}
      />
      <label htmlFor="article_ingress"> Ingress </label>
      <input
        type="text"
        id="article_ingress"
        name="ingress"
        placeholder="Skriv et kort innledende avsnitt"
        value={userInput.ingress}
        onChange={updateArticleValue}
      />
      <label htmlFor="article_content"> Innhold </label>
      <textarea
        type="text"
        id="article_content"
        name="content"
        placeholder="Skriv innhold"
        value={userInput.content}
        onChange={updateArticleValue}
      />
      <label htmlFor="article_category"> Kategori </label>
      <div>
            <CategorySelector handleCategoryChange={updateArticleValue} />
            <CategoryButton
            name="New category"
            clickHandler={() => setModal(!modal)}
             />
      </div>
     
      <label htmlFor="article_author"> Forfatter </label>
      <AuthorSelector handleAuthorChange={updateArticleValue} />
    </StyledForm>
  );
};

export default ArticleForm;
