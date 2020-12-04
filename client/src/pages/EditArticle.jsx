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

const EditArticle = () =>{

    const { id } = useParams();
    const article = articles.filter((a) => a.id === parseInt(id))[0];

    return(
        <>
        <Title title={article.title}/>
        <section>
            
        </section>
        </>
    );
};

export default EditArticle;