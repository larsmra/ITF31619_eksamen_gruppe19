import React from 'react';
import { places, offices } from '../data/data';

import Card from '../components/Card';

const Offices = () => (
  <section>
    <section>
      <button type="button" id="filter">
        Filter
      </button>
      <button type="button" id="listView">
        List
      </button>
      <button type="button" id="cardView">
        Card
      </button>
    </section>
    {places &&
      places.map((place) => (
        <section key={place.id}>
          <header>
            <h2>{place.city}</h2>
          </header>
          <section>
            {offices &&
              offices
                .filter((office) => office.location === place.id)
                .map((office) => <Card key={office.id} {...office} />)}
          </section>
        </section>
      ))}
  </section>
);

export default Offices;
