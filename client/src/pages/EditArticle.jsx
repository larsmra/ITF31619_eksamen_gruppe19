import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Page from '../components/Page';
import ArticleCreator from '../components/ArticleCreator';
import { get, update } from '../utils/articleService';

const EditArticle = () => {
  const { id } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  /* const [error, setError] = useState(''); */

  useEffect(() => {
    if (id) {
      const fetchArticleData = async () => {
        const { data } = await get(id);
        if (data.success) {
          setFormData(data.data);
          setTitle(data.data.title);
        } else {
          setError(data.message);
        }
      };
      fetchArticleData();
    }
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await update(id, formData);
    console.log(data);
    if (data.success) {
      history.push(`/fagartikler/${data.data._id}`);
    } else {
      setError(data.message);
    }
  };

  return (
    <Page title={title}>
      <ArticleCreator
        edit
        articleData={formData}
        setArticleData={setFormData}
        onSubmit={onSubmit}
      />
    </Page>
  );
};

export default EditArticle;
