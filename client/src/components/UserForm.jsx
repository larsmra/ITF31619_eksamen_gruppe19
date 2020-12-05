import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const UserForm = ({
  buttonText,
  formData,
  handleNameChange,
  handleEmailChange,
  handlePasswordChange,
  registration,
}) => (
  <StyledForm>
    {registration && (
      <>
        <label htmlFor="name">Name</label>
        <input type="name" id="name" name="name" onChange={handleNameChange} />
      </>
    )}
    <label htmlFor="email">Epost</label>
    <input type="text" id="email" name="email" onChange={handleEmailChange} />
    <label htmlFor="password">Passord</label>
    <input
      type="password"
      id="password"
      name="password"
      onChange={handlePasswordChange}
    />
    <ButtonSection>
      <button type="submit">{buttonText}</button>
    </ButtonSection>
  </StyledForm>
);

export default UserForm;
