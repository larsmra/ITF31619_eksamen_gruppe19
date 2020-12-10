import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Page from '../components/Page';
import { create } from '../utils/articleService';
import ArticleCreator from '../components/ArticleCreator';

const Create = styled.button`
  margin: 5px;
  padding: 20px 30px;
  background-color: lightgrey;
`;

const CreateArticle = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    ingress: '',
    content: '',
    author: '',
    category: '',
    hidden: false,
    image: null,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await create(formData);
    if (data.success) {
      history.push(`/fagartikler/${data.data._id}`);
    } else {
      setError(data.message);
    }
  };

  return (
    <Page title="Ny artikkel">
      <ArticleCreator
        articleData={formData}
        setArticleData={setFormData}
        onSubmit={onSubmit}
      />
    </Page>
  );
};

export default CreateArticle;
