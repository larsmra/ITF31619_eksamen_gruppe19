import React, {useState} from 'react';
import styled from 'styled-components';
import AuthorSelector from './AuthorSelector';
import CategorySelector from './CategorySelector';

const StyledForm = styled.form`
    & > label{
        font-size: 14px;
    }

    & > input{

    }
`

const ArticleForm = () =>{
    const [modal, setModal] = useState(false);

    return(

        <StyledForm>

            <label htmlFor='article_title'> Tittel </label>
            <input type='text' id='article_title' placeholder='Skriv inn tittel'> </input>
            <label htmlFor='article_ingress'> Ingress </label>
            <input type='text' id='article_ingress' placeholder='Skriv et kort innledende avsnitt'> </input>
            <label htmlFor='article_content'> Innhold </label>
            <textarea type='text' id='article_content' placeholder='Skriv innhold'> </textarea>
            <label htmlFor='article_category'> Kategori </label>
            <CategorySelector/>
            <CategoryButton name='New category' clickHandler={() => setModal(!modal)} />
            <label htmlFor='article_author'> Forfatter </label>
            <AuthorSelector />
            
        </StyledForm>
    );
};

export default ArticleForm;