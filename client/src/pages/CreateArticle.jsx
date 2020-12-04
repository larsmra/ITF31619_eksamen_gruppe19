import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import ArticleForm from '../components/ArticleForm';

const CreateArticle = style.button`
        margin: 5px;
        padding: 20px 30px;
        background-color: lightgrey;
`

const CreateArticle = () =>{

    return(
        <>
        <Title title="Ny Artikkel"/>
        
        <section>
        <ArticleForm/>

        <CreateArticle/>
       
        </section>
        </>
    );
};

export default ArticleCMS;