import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const StyledList = styled.ul`
  list-style: none;
`;

const StyledListElement = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Checklist = ({ values, idKey, nameKey, booleanKey, onChange }) => (
  <StyledList>
    {values &&
      values.map((value) => (
        <StyledListElement key={value[idKey]}>
          <Checkbox
            id={value[idKey]}
            name={value[nameKey]}
            checked={value[booleanKey]}
            onChange={() => onChange(value)}
          />
        </StyledListElement>
      ))}
  </StyledList>
);

export default Checklist;
