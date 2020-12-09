import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { useHistory } from 'react-router-dom';
import useCustomForm from '../hooks/useCustomForm';
import create from '../utils/inquiryService.js';
import { useAuthContext } from '../context/AuthProvider';

const ContactForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    & > * {
      margin: 5px;
    }
    
`
const Send = styled.button`
    padding: 20px 30px;
    justify-self: end;
    background-color: #479EB9;
    border-style: none;
    color: white;
    &:hover{
        background-color: #236B85;
    }
`;

const Contact = () => {
    const { isLoggedIn, user } = useAuthContext();
    let initialState;

    isLoggedIn ? 
      (initialState = { name: user.name, email: user.email, message:''}) 
      :
      (initialState = { name: '', email: '', message:''});

    const history = useHistory();
    const [error, setError] = useState('');
    const {
      values,
      errors,
      handleChange,
      validateInquiryForm,
      submitable,
    } = useCustomForm({
      initialState,
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit started");
        validateInquiryForm();
    };
    
    const submitForm = () => {
        const inquiryData = async () => {
          console.log(values);
          const { error } = await create(values);
        if (error) {
          setError(error);
          console.log("Noe galt skjedde");
        } else {
          history.push(`/kontakt`);
          console.log("Alt bra?");
        }
      };
      inquiryData();
    };
    
    useEffect(() => {
        if (submitable) {

          submitForm();
        }
      }, [submitable]);

    return(
        <>
        <Title title="Kontakt oss"/>
        <section>
            <ContactForm onSubmit={handleSubmit}>
            <label htmlFor="name">Navn</label>
            <input 
                type="text" 
                name="name"
                id="contact_name"
                value={values.name}
                onChange={handleChange}/>
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                name="email"
                id="contact_email"
                value={values.email}
                onChange={handleChange}/>
            <label htmlFor="subject">Emne</label>
            <textarea 
                type="text"
                name="message"
                id="contact_message"
                value={values.message}
                onChange={handleChange}/>
            <Send type="submit">
              Send 
            </Send>
            </ContactForm>
        </section>
        </>
    );
};

export default Contact;