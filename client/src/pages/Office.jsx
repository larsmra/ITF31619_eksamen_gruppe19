import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../components/Title';
import { offices } from '../data/data';

const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1em;
`;

const Office = () => {
  const { id } = useParams();
  const office = offices.filter((o) => o.id === parseInt(id))[0];

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
              <img alt={employee.name} />
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
