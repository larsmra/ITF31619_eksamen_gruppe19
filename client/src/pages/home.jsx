import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
`;
const GridItem = styled.article`
  padding: 20px 0;
  text-align: center;

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
      <section>
        <GridItem>
          <article id="offices">
            <h2> Kontorer </h2>
          </article>
        </GridItem>
        <GridItem>
          <article id="contact">
            <h2> Kontakt </h2>
          </article>
        </GridItem>
        <GridItem>
          <article id="articles">
            <h2> Se våre fagartikler om oppussing av bad</h2>
          </article>
        </GridItem>
      </section>
    </GridContainer>
  </>
);

export default Home;
