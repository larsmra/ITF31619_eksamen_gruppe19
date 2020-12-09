import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';

const GridContainer = styled.section`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
`;
const GridItem = styled.article`
  padding: 50px 0;
  text-align: center;
  background-color: lightgray;

  &#offices {
    grid-column: 1;
  }

  &#contact {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  &#articles {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

const Home = () => (
  <>
    <Title title="Velkommen til FG Rørleggerservice AS" />
    <GridContainer>
      <GridItem id="offices">
        <h2> Kontorer </h2>
      </GridItem>
      <GridItem id="contact">
        <h2> Kontakt </h2>
      </GridItem>
      <GridItem id="articles">
        <h2> Se våre fagartikler om oppussing av bad</h2>
      </GridItem>
    </GridContainer>
  </>
);

export default Home;
