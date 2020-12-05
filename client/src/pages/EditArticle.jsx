import React from 'react';
import styled from 'styled-components';
import { useParams} from 'react-router-dom';
import Title from '../components/Title';
import ArticleForm from '../components/ArticleForm';
import { articles } from '../data/articleData';

const SaveArticle = styled.button`
        margin: 5px;
        padding: 20px 30px;
        background-color: lightgrey;
`

const EditArticle = ({userInput, setUserInput, updateArticle}) =>{

    const { id } = useParams();
    const article = articles.filter((a) => a.id === parseInt(id))[0];

    const goToArticlePage = () => {
        history.push(`/fagartikler/${id}`);
    };

    const editArticle = () => {
        updateArticle();
        goToArticlePage();
    };

    return(
        <>
        <Title title={article.title}/>
        <section>
        <ArticleForm 
               userInput={userInput}
               setUserInput={setUserInput}/>
        <SaveArticle onClick={editArticle}/>
        </section>
        </>
    );
};

export default EditArticle;