import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../components/Title';
import { officeLocations } from '../data/data';

const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1em;
`;

const StyledImage = styled.div`
  margin: 0.2em;
  width: 100%;
  height: 8em;
  background-color: #a9a9a9;
`;

const Office = () => {
  const { id } = useParams();
  let office;
  officeLocations.forEach((location) =>
    location.offices.forEach((o) => o.id === parseInt(id) && (office = o))
  );

  return (
    <>
      <Title title="Våre kontorer" />
      <section className="pageContent">
        <h2>Velkommen til {office.name}</h2>
        <p>{office.description}</p>
      </section>
      <section className="pageContent">
        <h2>Våre ansatte</h2>
        <GridSection>
          {office.employees.map((employee) => (
            <article key={employee.id}>
              <StyledImage alt={employee.name} />
              <p>{employee.name}</p>
              <p>{employee.position}</p>
            </article>
          ))}
        </GridSection>
      </section>
      <section className="pageContent">
        <p>Kontakt oss på {office.phone}</p>
      </section>
    </>
  );
};

export default Office;
