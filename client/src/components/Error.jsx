import React from 'react';
<<<<<<< HEAD

const Error = ({ message }) => (
  <StyledError>
    <p>{message}</p>
  </StyledError>
);

export default Error;
=======
import styled from 'styled-components';

const Message = styled.p`
  color: #ff0000;
`;

const Error = ({ message }) => <>{message && <Message>{message}</Message>}</>;

export default Error;
>>>>>>> frontpage
