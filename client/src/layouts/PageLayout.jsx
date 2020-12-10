import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Footer from '../components/Footer';
import { usePageDataContext } from '../context/PageDataProvider';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const StyledTitleSection = styled.section.attrs(({ bg }) => ({
  bg: bg || '',
}))`
  height: 15em;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;
  background-image: ${({ bg }) => bg && `url(${bg})`};
  background-repeat: no-repeat;
  background-color: #d3d3d3;

  & > h1 {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

const StyledMain = styled.main.attrs(({ w }) => ({
  w: w || false,
}))`
  margin: 1em;
  width: ${({ w }) => (w ? '90%' : '60%')};
  align-self: center;
`;

const PageLayout = ({ children }) => {
  const { title, background, wide } = usePageDataContext();

  return (
    <StyledWrapper>
      <header>
        <Navbar />
        <StyledTitleSection bg={background}>
          <Title title={title || 'Title'} />
        </StyledTitleSection>
      </header>
      <StyledMain w={wide}>{children}</StyledMain>
      <Footer
        orgnumber="Orgnr: 007 007 007"
        email="lg@lgror.no"
        phone="99 00 00 00"
      />
    </StyledWrapper>
  );
};

export default PageLayout;
