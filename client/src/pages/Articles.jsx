import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import Title from '../components/Title';
import ArticleCard from '../components/ArticleCard';
import { useAuthContext } from '../context/AuthProvider';
import { list as listArticles } from '../utils/articleService';
import { list as listCategories } from '../utils/categoryService';
import ArticleNavigation from '../components/ArticleNavigation';

const ArticleFunctions = styled.section.attrs(({ isAdmin }) => ({
  isAdmin: isAdmin || false,
}))`
  max-width: 90%;
  margin: auto;
  display: flex;
  font-size: 1.5rem;
  justify-content: ${({ isAdmin }) => (isAdmin ? 'space-between' : 'flex-end')};
`;

const Create = styled.a`
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
  & > button {
    margin: 5px;
    padding: 20px 30px;
    background-color: lightgrey;
    border-style: none;
    color: white;
    &:hover {
      background-color: grey;
    }
  }
`;

const StyledArticleSection = styled.section`
  display: flex;
  flex-flow: column wrap;
  padding: 50px 0px;
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (page > 1) {
      goToFirstPage();
    }
    fetchArticleData(page);
  };

  const handleSearchChange = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (page > 1) {
      goToFirstPage();
    }
    fetchArticleData(page, e.target.value, filter);
  };

  const handleFilterChange = (id) => {
    const tempCategories = [...categories];
    const filtered = tempCategories
      .filter((category) => category._id === id)
      .shift();
    filtered.view = !filtered.view;
    setCategories(tempCategories);
    const f = categories
      .filter((category) => category.view)
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
      <ArticleFunctions isAdmin={isAdmin}>
        {isAdmin && <Create href="/fagartikler/ny"> Ny Artikkel </Create>}
        <StyledButtonWrapper>
          <button type="button" onClick={handleSearchView}>
            Search
          </button>
          <button type="button" onClick={handleFilterView}>
            Filter
          </button>
          {searchView && (
            <section>
              <form onSubmit={handleSearch}>
                <input
                  type="search"
                  placeholder="Søk"
                  value={search}
                  onChange={handleSearchChange}
                />
              </form>
            </section>
          )}
          {filterView && (
            <section>
              <ul>
                {categories &&
                  categories.map((category) => (
                    <li key={category._id}>
                      <input
                        type="checkbox"
                        id={category.name}
                        checked={category.view}
                        onChange={() => handleFilterChange(category._id)}
                      />
                      <label htmlFor={category.name}>{category.name}</label>
                    </li>
                  ))}
              </ul>
            </section>
          )}
        </StyledButtonWrapper>
      </ArticleFunctions>
      <StyledArticleSection>
        {/* Use later

                {loading && 'Loading ...'}
                {error && <p>{error}</p>}
                {articles && articles.length > 0 && <ArticleCard data={articles} /> }
                
                */}
        {articles &&
          articles.map((article) => (
            <ArticleCard key={article._id} id={article._id} {...article} />
          ))}
      </StyledArticleSection>
      <ArticleNavigation pages={pages} />
    </>
  );
};
export default Articles;
