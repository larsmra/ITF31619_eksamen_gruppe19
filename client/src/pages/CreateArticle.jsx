import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import ArticleForm from '../components/ArticleForm';

const Create = styled.button`
        margin: 5px;
        padding: 20px 30px;
        background-color: lightgrey;

`

const CreateArticle = ({addArticle, userInput, setUserInput, updateArticleId, }) =>{

    const goToArticlePage = () => {
        history.push(`/fagartikler`);
      };
      
    const createArticle = () => {
        updateArticleId();
        addArticle();
        goToArticlePage();
      };

    return(
        <>
            <Title title="Ny artikkel" />

            <section>
               <ArticleForm />
               <Create/>
            </section>
        </>
    );
};

export default CreateArticle;