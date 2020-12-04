import React from 'react';
import styled from 'styled-components';
import AuthorSelector from './AuthorSelector';
import CategorySelector from './CategorySelector';

const ArticleForm = styled.form`
    & > label{
        font-size: 14px;
    }
`

const ArticleForm = () =>{

    return(

        <ArticleForm>

            <label htmlFor='article_title'> Tittel </label>
            <input type='text' id='article_title' placeholder='Skriv inn tittel'> </input>
            <label htmlFor='article_ingress'> Ingress </label>
            <input type='text' id='article_ingress' placeholder='Skriv et kort innledende avsnitt'> </input>
            <label htmlFor='article_content'> Innhold </label>
            <textarea type='text' id='article_content' placeholder='Skriv innhold'> </textarea>
            <label htmlFor='article_author'> Forfatter </label>
            <AuthorSelector />
            <label htmlFor='article_category'> Kategori </label>

        </ArticleForm>
    );
};

export default ArticleForm;