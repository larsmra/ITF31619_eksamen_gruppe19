import React, { useState } from 'react';
import styled from 'styled-components';
import OfficeItem from './OfficeItem';

const StyledSection = styled.section.attrs(({ isList }) => ({
  isList: isList || false,
}))`
  display: grid;
  grid-gap: 2em;
  width: 100%;
  ${({ isList }) =>
    isList === true
      ? 'grid-template-columns: 100%'
      : 'grid-template-columns: repeat(4, 1fr)'};
`;

const OfficeContainer = ({ place, offices, isList = false }) => (
  <StyledSection isList={isList}>
    {offices &&
      offices.map((office, index) => (
        <OfficeItem key={office.id} index={index} isList={isList} {...office} />
      ))}
  </StyledSection>
);

export default OfficeContainer;
