import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  width: 50%;
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const TYPE_EMAIL = 'email';
const TYPE_PASSWORD = 'password';
const TYPE_TEXT = 'text';

const UserForm = ({ buttonText, formData, setFormData, labels, onSubmit }) => (
  <StyledForm onSubmit={onSubmit}>
    {Object.keys(formData).map((key, index) => (
      <InputWrapper key={index}>
        <label htmlFor={key}>{labels[index] ? labels[index] : key}</label>
        <input
          id={key}
          type={key === TYPE_EMAIL || key === TYPE_PASSWORD ? key : TYPE_TEXT}
          value={formData[key]}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, [key]: e.target.value }))
          }
        />
      </InputWrapper>
    ))}
    <ButtonSection>
      <button type="submit">{buttonText}</button>
    </ButtonSection>
  </StyledForm>
);

export default UserForm;
