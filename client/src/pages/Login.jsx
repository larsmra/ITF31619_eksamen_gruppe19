import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Page from '../components/Page';
import Error from '../components/Error';
import UserForm from '../components/UserForm';
import { login } from '../utils/authService';
import { useAuthContext } from '../context/AuthProvider';

const StyledSection = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const history = useHistory();
  const { setUser } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await login(formData);
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
        labels={['Epost', 'Passord']}
        buttonText="Logg inn"
        onSubmit={handleLogin}
      />
    </StyledSection>
  );
};

export default Login;
