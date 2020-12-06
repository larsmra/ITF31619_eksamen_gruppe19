import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../components/Error';
import UserForm from '../components/UserForm';
import { login } from '../utils/auth';
import { useAuthContext } from '../context/AuthProvider';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
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
    <StyledSection>
      <Error message={error} />
      <UserForm
        formData={formData}
        handleEmailChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        handlePasswordChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
        buttonText="Logg inn"
        onSubmit={handleLogin}
      />
    </StyledSection>
  );
};

export default Login;
