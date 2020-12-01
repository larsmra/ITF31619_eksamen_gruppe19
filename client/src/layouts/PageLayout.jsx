import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

const PageLayout = ({ children }) => (
  <>
    <header>
      <Navbar />
      <Title title="Velkommen til FG Rørleggerservice AS" />
    </header>
    <main>{children}</main>
  </>
);

export default PageLayout;
