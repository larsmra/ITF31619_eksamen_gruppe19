import React from 'react';
import styled from 'styled-components';

const Message = styled.p`
  color: #ff0000;
`;

const Error = ({ message }) => <>{message && <Message>{message}</Message>}</>;

export default Error;
