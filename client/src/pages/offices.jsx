import React from 'react';

const offices = [
  {
    id: 1,
    city: 'Fredrikstad',
    plumbers: [
      {
        id: 1,
        name: 'Rørlegger 1',
        phone: '69 99 00 00',
        email: 'fredrikstad1@epost.no',
      },
      {
        id: 2,
        name: 'Rørlegger 2',
        phone: '69 99 00 00',
        email: 'fredrikstad2@epost.no',
      },
    ],
  },
  {
    id: 2,
    city: 'Sarpsborg',
    plumbers: [
      {
        id: 3,
        name: 'Rørlegger 3',
        phone: '69 99 00 00',
        email: 'sarpsborg1@epost.no',
      },
      {
        id: 4,
        name: 'Rørlegger 4',
        phone: '69 99 00 00',
        email: 'sarpsborg2@epost.no',
      },
      {
        id: 5,
        name: 'Rørlegger 5',
        phone: '69 99 00 00',
        email: 'sarpsborg3@epost.no',
      },
      {
        id: 6,
        name: 'Rørlegger 6',
        phone: '69 99 00 00',
        email: 'sarpsborg4@epost.no',
      },
    ],
  },
  {
    id: 3,
    city: 'Moss',
    plumbers: [
      {
        id: 7,
        name: 'Rørlegger 7',
        phone: '69 99 00 00',
        email: 'moss1@epost.no',
      },
      {
        id: 8,
        name: 'Rørlegger 8',
        phone: '69 99 00 00',
        email: 'moss2@epost.no',
      },
      {
        id: 9,
        name: 'Rørlegger 9',
        phone: '69 99 00 00',
        email: 'moss3@epost.no',
      },
      {
        id: 10,
        name: 'Rørlegger 10',
        phone: '69 99 00 00',
        email: 'moss4@epost.no',
      },
    ],
  },
  {
    id: 4,
    city: 'Halden',
    plumbers: [
      {
        id: 11,
        name: 'Rørlegger 11',
        phone: '69 99 00 00',
        email: 'halden1@epost.no',
      },
      {
        id: 8,
        name: 'Rørlegger 12',
        phone: '69 99 00 00',
        email: 'halden2@epost.no',
      },
      {
        id: 9,
        name: 'Rørlegger 13',
        phone: '69 99 00 00',
        email: 'halden3@epost.no',
      },
      {
        id: 10,
        name: 'Rørlegger 14',
        phone: '69 99 00 00',
        email: 'halden4@epost.no',
      },
    ],
  },
];

const Offices = () => (
  <section>
    {offices &&
      offices.map((office) => (
        <section key={office.id}>
          <header>
            <h2>{office.city}</h2>
          </header>
          <section>
            {office.plumbers &&
              office.plumbers.map((plumber) => (
                <article key={plumber.id}>
                  <h3>{plumber.name}</h3>
                  <p>{plumber.name}</p>
                  <p>{plumber.phone}</p>
                  <p>{plumber.email}</p>
                </article>
              ))}
          </section>
        </section>
      ))}
  </section>
);

export default Offices;
