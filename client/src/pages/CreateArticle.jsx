import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import ArticleForm from '../components/ArticleForm';

const Create = styled.button`
        margin: 5px;
        padding: 20px 30px;
        background-color: lightgrey;
`

const CreateArticle = () =>{

    return(
        <>
            <Title title="Ny artikkel" />

            <section>
               <ArticleForm/>
            </section>
        </>
    );
};

export default CreateArticle;