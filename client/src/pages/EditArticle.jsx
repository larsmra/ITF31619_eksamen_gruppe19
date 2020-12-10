import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Title from '../components/Title';
import ArticleCreator from '../components/ArticleCreator';
import { get, update } from '../utils/articleService';

const EditArticle = () => {
  const { id } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');

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
    if (data.success) {
      history.push(`/fagartikler/${data.data._id}`);
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      {title && <Title title={title} />}
      <section className="pageContent">
        {formData && (
          <ArticleCreator
            edit
            articleData={formData}
            setArticleData={setFormData}
            onSubmit={onSubmit}
          />
        )}
      </section>
    </>
  );
};

export default EditArticle;
