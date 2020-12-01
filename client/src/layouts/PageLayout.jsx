import React from 'react';
import Navbar from '../components/Navbar';

const PageLayout = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
  </>
);

export default PageLayout;
