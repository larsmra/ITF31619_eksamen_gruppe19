import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StyledMain = styled.main`
  margin: 1em;
`;

const PageLayout = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <Footer
      orgnumber="Orgnr: 007 007 007"
      email="lg@lgror.no"
      phone="99 00 00 00"
    />
  </>
);

export default PageLayout;
