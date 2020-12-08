import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import Title from '../components/Title';
import ArticleCard from '../components/ArticleCard';
import { useAuthContext } from '../context/AuthProvider';
import { list } from '../utils/articleServices';
import ArticleNavigation from '../components/ArticleNavigation';

const ArticleFunctions = styled.section.attrs(({ isAdmin }) => ({
  isAdmin: isAdmin || false,
}))`
  max-width: 90%;
  margin: auto;
  display: flex;
  justify-content: ${({ isAdmin }) => (isAdmin ? 'space-between' : 'flex-end')};
`;

const Create = styled.a`
  padding: 20px 30px;
  background-color: #479eb9;
  border-style: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #236b85;
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
  const [search, setSearch] = useState('');
  const [searchView, setSearchView] = useState(false);
  const [filterView, setFilterView] = useState(false);

  const goToFirstPage = useCallback(
    () => history.push('/fagartikler/sider/1'),
    [history]
  );

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (page > 1) {
      goToFirstPage();
    }
  };

  useEffect(() => {
    if (page) {
      const fetchData = async (p) => {
        const { data } = await list(p, search);
        if (data.success) {
          setPages(data.data.count === 0 ? 1 : Math.ceil(data.data.count / 5));
          setArticles(data.data.articles);
          setError(null);
        } else {
          setError(data.response);
        }
      };
      fetchData(page);
    } else {
      goToFirstPage();
    }
  }, [page, search, goToFirstPage]);

  const handleSearchView = () => {
    setSearchView(!searchView);
    setFilterView(false);
  };

  const handleFilterView = () => {
    setFilterView(!filterView);
    setSearchView(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    goToFirstPage();
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
              <input />
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
