import React, { useState, useEffect, useCallback } from 'react';
import { list } from '../utils/categoryService';
import ArticleForm from './ArticleForm';
import CategoryModal from './CategoryModal';

const ArticleCreator = ({
  articleData,
  setArticleData,
  onSubmit,
  edit = false,
}) => {
  const [categories, setCategories] = useState([]);
  const [modal, setModal] = useState(false);

  const fetchCategoryData = async () => {
    const { data } = await list();
    if (data.success) {
      setCategories([...data.data]);
      setArticleData((prev) => ({ ...prev, category: data.data[0]?._id }));
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <>
      {categories && (
        <ArticleForm
          edit={edit}
          articleData={articleData}
          setArticleData={setArticleData}
          categories={categories}
          onSubmit={onSubmit}
          setModal={setModal}
        />
      )}
      {modal && (
        <CategoryModal
          setModal={setModal}
          fetchCategoryData={fetchCategoryData}
        />
      )}
    </>
  );
};

export default ArticleCreator;
