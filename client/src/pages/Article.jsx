import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { articles } from '../data/articleData';

const Article = () => {
    const { id } = useParams();
    const article = articles.filter((a) => a.id === parseInt(id))[0];

    return(

        <Title title={article.title}/>
        
    )
}

export default Article;