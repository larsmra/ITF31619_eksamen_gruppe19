import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  appearance: none;
  background-color: #ffffff;
  border: 0.2em solid #ffffff;
  border-radius: 0.2em;
  padding: 0.3em;
  display: inline-block;

  &:checked {
    background-color: #479eb9;
  }
`;

const Checkbox = ({ checked, id, name, onChange }) => (
  <>
    <StyledCheckbox
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>{name}</label>
  </>
);

export default Checkbox;
