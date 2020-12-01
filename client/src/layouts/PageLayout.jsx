import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

const PageLayout = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
  </>
);

export default PageLayout;
