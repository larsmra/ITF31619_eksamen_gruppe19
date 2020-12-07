import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createArticle } from '../utils/article';
import { createCategory } from '../utils/category';

const CreateArticle = () => {
  const history = useHistory();
  const [articleFormData, setArticleFormData] = useState({
    title: '',
    ingress: '',
    content: '',
    hidden: false,
    category: {
      _id: '5fcdad7e77d39e554c553b79',
    },
    author: 'Lars Larsen',
  });
  const [category, setCategory] = useState({ name: '' });
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);

  const submitArticle = async (e) => {
    e.preventDefault();
    const { data } = await createArticle(articleFormData);
    if (data.success) {
      history.push(`/fagartikkel/${data.data._id}`);
    } else {
      setError(data.message);
    }
  };

  const submitCategory = async (e) => {
    e.preventDefault();
    const { data } = await createCategory(category);
    if (data.success) {
      console.log(data.data);
    } else {
      console.log(data.message);
      setError(data.message);
    }
  };

  return (
    <>
      <form onSubmit={submitArticle}>
        <label htmlFor="title">Tittel</label>
        <input
          type="text"
          id="title"
          name="title"
          value={articleFormData.title}
          onChange={(e) =>
            setArticleFormData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <label htmlFor="ingress">Ingress</label>
        <input
          type="text"
          id="ingress"
          name="ingress"
          value={articleFormData.ingress}
          onChange={(e) =>
            setArticleFormData((prev) => ({ ...prev, ingress: e.target.value }))
          }
        />
        <label htmlFor="content">Innhold</label>
        <textarea
          id="content"
          name="content"
          value={articleFormData.content}
          onChange={(e) =>
            setArticleFormData((prev) => ({ ...prev, content: e.target.value }))
          }
        />
        <button type="button" onClick={() => setModal(!modal)}>
          Ny
        </button>
        <input
          type="checkbox"
          id="hide"
          name="hide"
          value={articleFormData.hidden}
          onChange={() =>
            setArticleFormData((prev) => ({
              ...prev,
              hidden: !articleFormData.hidden,
            }))
          }
        />
        <label htmlFor="hide">Skjult artikkel</label>
        <button type="submit">Lag artikkel</button>
      </form>
      {modal && (
        <form onSubmit={submitCategory}>
          <label htmlFor="category">Ny kategori</label>
          <input
            id="category"
            name="category"
            type="text"
            value={category.name}
            onChange={(e) => setCategory({ name: e.target.value })}
          />
          <button type="submit">Lag</button>
        </form>
      )}
    </>
  );
};

export default CreateArticle;
