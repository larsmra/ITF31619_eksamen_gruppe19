import React from 'react';
import { useParams } from 'react-router-dom';
import { offices } from '../data/data';

const Office = () => {
  const { id } = useParams();
  const office = offices.filter((o) => o.id === parseInt(id))[0];

  return (
    <>
      <section>
        <h2>Velkommen til {office.name}</h2>
        <p>{office.description}</p>
      </section>
      <section>
        <h2>Våre ansatte</h2>
        <section>
          {office.employees.map((employee) => (
            <article key={employee.id}>
              <p>{employee.name}</p>
              <p>{employee.position}</p>
            </article>
          ))}
        </section>
      </section>
      <section>
        <p>Kontakt oss på {office.phone}</p>
      </section>
    </>
  );
};

export default Office;
