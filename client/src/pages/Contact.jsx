import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { useHistory } from 'react-router-dom';
import useCustomForm from '../hooks/useCustomForm';
import create from '../utils/inquiryService';
import { useAuthContext } from '../context/AuthProvider';

const ContactForm = styled.form`

`

const initialState = { name: '', email: '', message:''};

const Contact = () => {
    const { isLoggedIn, user } = useAuthContext();

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

    isLoggedIn && (values.name=user.name, values.email=user.email); 

    const handleSubmit = (event) => {
        event.preventDefault();
        validateInquiryForm();
    };
    
    const submitForm = () => {
        const inquiryData = async () => {
          const { error } = await create(values);
        if (error) {
          setError(error);
        } else {
          history.push(`/kontakt`);
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
            <ContactForm>
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
            </ContactForm>
        </section>
        </>
    );
};

export default Contact;