import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../components/Error';
import UserForm from '../components/UserForm';
import { useAuthContext } from '../context/AuthProvider';

const Register = () => {
  const { setUser } = useAuthContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleRegistration = async () => {
    e.preventDefault();
    const { data } = await login(formData);
    console.log(data);
    if (data.success) {
      const { user } = data;
      const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
      setUser({ ...user, expire });
      history.push('/');
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      <Error />
      <UserForm
        formData={formData}
        setFormData={setFormData}
        labels={['Navn', 'Epost', 'Passord']}
      />
    </>
  );
};

export default Register;
