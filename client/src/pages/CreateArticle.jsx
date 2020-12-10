import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Page from '../components/Page';
import Title from '../components/Title';
import ArticleForm from '../components/ArticleForm';
import Error from '../components/Error';
import useCustomForm from '../hooks/useCustomForm';
import { create } from '../utils/articleService';
import CategoryModal from '../components/CategoryModal';
import { upload } from '../utils/imageService';

const Create = styled.button`
  margin: 5px;
  padding: 20px 30px;
  background-color: lightgrey;
`;

/* const initalState = {
  title: '',
  ingress: '',
  content: '',
  author: '',
  category: '',
}; */

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
  const [modal, setModal] = useState(false);

  console.log(formData);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await create(formData);
    if (data.success) {
      history.push(`/fagartikler/${data.data._id}`);
    } else {
      setError(data.message);
    }
  };

  /* const {
    values,
    errors,
    handleChange,
    validateForm,
    submitable,
  } = useCustomForm({
    initalState,
  }); */

  /* const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  }; */

  /* useEffect(() => {
    if (submitable) {
      const submitForm = () => {
        const articleData = async () => {
          const response = await create(values);
          console.log(response);
          if (error) {
            setError(error);
          } else {
            history.push('/fagartikler');
          }
        };
        articleData();
      };
      submitForm();
    }
  }, [submitable, error, history, values]); */

  return (
    <>
      <Title title="Ny artikkel" />
      <ArticleForm
        data={formData}
        setData={setFormData}
        setModal={setModal}
        onSubmit={onSubmit}
      />
      {modal && <CategoryModal setModal={setModal} />}
    </>
  );
};

export default CreateArticle;
