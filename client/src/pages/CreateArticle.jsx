import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import ArticleForm from '../components/ArticleForm';

const Create = styled.button`
        margin: 5px;
        padding: 20px 30px;
        background-color: lightgrey;

`

const CreateArticle = ({addArticle, updateArticleId, userInput, setUserInput }) =>{

    const goToArticlesPage = () => {
        history.push(`/fagartikler`);
    };

    const createArticle = () => {
        updateArticleId();
        addArticle();
        goToArticlesPage();
    };

    return(
        <>
            <Title title="Ny artikkel" />

            <section>
               <ArticleForm 
               userInput={userInput}
               setUserInput={setUserInput}/>
               <Create onClick={createArticle}/>
            </section>
        </>
    );
};

export default CreateArticle;