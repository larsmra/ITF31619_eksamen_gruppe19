import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import Title from '../components/Title';
import ArticleCard from '../components/ArticleCard';
import { useAuthContext } from '../context/AuthProvider';
import { list as listArticles } from '../utils/articleService';
import { list as listCategories } from '../utils/categoryService';
import Checklist from '../components/Checklist';
import ArticleNavigation from '../components/ArticleNavigation';

const ArticleFunctions = styled.section.attrs(({ isAdmin }) => ({
  isAdmin: isAdmin || false,
}))`
  display: flex;
  flex-flow: column;
`;

const Create = styled.button`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.default};
  font-size: 1.5rem;
  border-style: none;
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.action};
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-flow: row;
`;

const StyledRightButtonWrapper = styled.div`
  margin-left: auto;
  & > button {
    margin-left: 1em;
    padding: 20px 30px;
    border-style: none;
  }
`;

const DropDownWrapper = styled.div`
  background-color: #808080;
  padding: 1em;
  color: #ffffff;

  & > input {
    width: 100%;
  }

  & > ul {
    list-style: none;
  }
`;

const StyledArticleSection = styled.section`
  display: flex;
  flex-flow: column;
`;

const ToggleButton = styled.button.attrs(({ pressed }) => ({
  pressed: pressed || false,
}))`
  background-color: ${({ pressed }) => (pressed ? '#808080' : '#d3d3d3')};
  color: ${({ pressed }) => (pressed ? '#ffffff' : '#000000')};
  &:hover {
    background-color: #808080;
    color: #ffffff;
  }
`;

const Articles = () => {
  const { isAdmin } = useAuthContext();
  const { page } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [pages, setPages] = useState(1);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);
  const [searchView, setSearchView] = useState(false);
  const [filterView, setFilterView] = useState(false);

  const goToFirstPage = useCallback(
    () => history.push('/fagartikler/sider/1'),
    [history]
  );

  const fetchCategoryData = async () => {
    const { data } = await listCategories();
    if (data.success) {
      data.data.map((category) => (category.view = true));
      setCategories((prev) =>
        data.data.filter((c1) =>
          prev.map((c2) => c1.name === c2.name && (c1.view = c2.view))
        )
      );
      setError(null);
    } else {
      setError(data.response);
    }
  };

  const fetchArticleData = async (p, s, f) => {
    const { data } = await listArticles(p, s, f);
    if (data.success) {
      setPages(data.data.count === 0 ? 1 : Math.ceil(data.data.count / 5));
      setArticles(data.data.articles);
      setError(null);
    } else {
      setError(data.response);
    }
  };

  useEffect(() => {
    if (page) {
      fetchCategoryData();
      fetchArticleData(page, search, filter);
    } else {
      goToFirstPage();
    }
  }, [page, search, filter, goToFirstPage]);

  const handleSearchView = () => {
    setSearchView(!searchView);
    setFilterView(false);
  };

  const handleFilterView = () => {
    fetchCategoryData();
    setFilterView(!filterView);
    setSearchView(false);
  };

  const handleSearchChange = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (page > 1) {
      goToFirstPage();
    }
    fetchArticleData(page, e.target.value, filter);
  };

  const handleFilterChange = (filtered) => {
    filtered.view = !filtered.view;
    setCategories([...categories]);
    const f = categories
      .filter((category) => !category.view)
      .map((category) => category.name);
    setFilter(f);
    if (page > 1) {
      goToFirstPage();
    }
    fetchArticleData(page, search, f);
  };

  return (
    <>
      <Title title="Fagartikler" />
      <ArticleFunctions isAdmin={isAdmin} className="pageContent">
        <StyledButtonWrapper>
          {isAdmin && (
            <Create onClick={() => history.push('/fagartikler/ny')}>
              Ny Artikkel
            </Create>
          )}
          <StyledRightButtonWrapper>
            <ToggleButton
              type="button"
              onClick={handleSearchView}
              pressed={searchView}
            >
              Search
            </ToggleButton>
            <ToggleButton
              type="button"
              onClick={handleFilterView}
              pressed={filterView}
            >
              Filter
            </ToggleButton>
          </StyledRightButtonWrapper>
        </StyledButtonWrapper>
        {searchView && (
          <DropDownWrapper>
            <label htmlFor="search">Søk</label>
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Søk"
              value={search}
              onChange={handleSearchChange}
            />
          </DropDownWrapper>
        )}
        {filterView && (
          <DropDownWrapper>
            <Checklist
              values={categories}
              idKey="_id"
              nameKey="name"
              booleanKey="view"
              onChange={handleFilterChange}
            />
          </DropDownWrapper>
        )}
      </ArticleFunctions>
      <StyledArticleSection className="pageContent">
        {articles &&
          articles.map((article) => (
            <ArticleCard
              key={article._id}
              id={article._id}
              imageSrc={article.imagePath}
              {...article}
            />
          ))}
      </StyledArticleSection>
      <ArticleNavigation pages={pages} />
    </>
  );
};
export default Articles;
