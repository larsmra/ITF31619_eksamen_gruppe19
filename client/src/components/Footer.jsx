import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const FooterText = styled.p`
  display: inline-block;
  padding: 10px;
`;

const Footer = ({ orgnumber, email, phone }) => (
  <StyledFooter>
    <FooterText>{orgnumber}</FooterText>
    <FooterText>{email}</FooterText>
    <FooterText>{phone}</FooterText>
  </StyledFooter>
);

export default Footer;
