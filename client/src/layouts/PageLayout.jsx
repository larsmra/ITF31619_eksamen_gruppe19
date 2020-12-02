import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Footer from '../components/Footer';

const PageLayout = ({children}) => (
  <>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <Footer orgnumber="Orgnr: 007 007 007" email="lg@lgror.no" phone="99 00 00 00"/>
  </>
);

export default PageLayout;
