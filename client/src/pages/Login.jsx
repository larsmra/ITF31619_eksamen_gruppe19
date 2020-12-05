import React, { useState } from 'react';
import UserForm from '../components/UserForm';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  return (
    <section>
      <UserForm
        formData={formData}
        handleEmailChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        handlePasswordChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
        buttonText="Logg inn"
      />
    </section>
  );
};

export default Login;
