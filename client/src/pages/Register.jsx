import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Page from '../components/Page';
import Error from '../components/Error';
import UserForm from '../components/UserForm';
import { useAuthContext } from '../context/AuthProvider';
import { register } from '../utils/authService';

const StyledSection = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Register = () => {
  const { setUser } = useAuthContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleRegistration = async (e) => {
    e.preventDefault();
    const { data } = await register(formData);
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
    <StyledSection>
      <Error message={error} />
      <UserForm
        formData={formData}
        setFormData={setFormData}
        labels={['Navn', 'Epost', 'Passord']}
        buttonText="Registrer"
        onSubmit={handleRegistration}
      />
    </StyledSection>
  );
};

export default Register;
