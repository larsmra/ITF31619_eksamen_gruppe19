import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Title from '../components/Title';
import { useCustomForm } from '../hooks/useCustomForm';
import { create } from '../utils/inquiryService';
import { useAuthContext } from '../context/AuthProvider';
import Error from '../components/Error';

const ContactForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  & > * {
    margin: 5px;
  }
`;
const Send = styled.button`
  padding: 20px 30px;
  justify-self: end;
  background-color: #479eb9;
  border-style: none;
  color: white;
  &:hover {
    background-color: #236b85;
  }
`;

const Contact = () => {
  const { isLoggedIn, user } = useAuthContext();
  let initialState;

  // eslint-disable-next-line no-unused-expressions
  isLoggedIn
    ? (initialState = { name: user.name, email: user.email, message: '' })
    : (initialState = { name: '', email: '', message: '' });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
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
    validateInquiryForm();
  };

  const submitForm = () => {
    const inquiryData = async () => {
      const { data } = await create(values);
      if (!data.success) {
        setError(data.message);
      } else {
        setSuccess(true);
        setError(null);
      }
    };
    inquiryData();
  };

  useEffect(() => {
    if (submitable) {
      submitForm();
    }
  }, [submitable]);

  return (
    <>
      <Title title="Kontakt oss" />
      <section className="pageContent">
        {error ||
          (errors && (
            <div>
              {<Error message={errors} />}
              {<Error message={error} />}
            </div>
          ))}
        <ContactForm onSubmit={handleSubmit}>
          <label htmlFor="name">Navn</label>
          <input
            type="text"
            name="name"
            id="contact_name"
            value={values.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="contact_email"
            value={values.email}
            onChange={handleChange}
          />
          <label htmlFor="subject">Emne</label>
          <textarea
            type="text"
            name="message"
            id="contact_message"
            value={values.message}
            onChange={handleChange}
          />
          <Send type="submit">Send</Send>
        </ContactForm>
      </section>
    </>
  );
};

export default Contact;
