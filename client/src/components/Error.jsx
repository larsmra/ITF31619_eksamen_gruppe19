import React from 'react';
import styled from 'styled-components';

const Message = styled.p`
  color: ${({ theme }) => theme.colors.error};
`;

const Error = ({ message = null }) => (
  <>{message && <Message>{message}</Message>}</>
);

export default Error;
