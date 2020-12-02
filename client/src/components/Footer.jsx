import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%; 
`

const StyledFooterText = styled.p`
    display: inline-block;
    padding: 10px;
`

const Footer = ({ orgnumber, email, phone }) => ( 
    <StyledFooter>
        <footer>
            <StyledFooterText>
                <p>{orgnumber}</p> 
                <p>{email}</p> 
                <p>{phone}</p>
            </StyledFooterText>  
        </footer>  
    </StyledFooter>
  
);

export default Footer;
