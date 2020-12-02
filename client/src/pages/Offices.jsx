import React, { useState } from 'react';
import { locations, offices } from '../data/data';

import OfficeContainer from '../components/OfficeContainer';

const Offices = () => {
  const [listView, setListView] = useState(false);

  return (
    <section>
      <section>
        <button type="button" id="filter">
          Filter
        </button>
        <button type="button" id="listView" onClick={() => setListView(true)}>
          List
        </button>
        <button type="button" id="cardView" onClick={() => setListView(false)}>
          Card
        </button>
      </section>
      {locations &&
        locations.map((location) => {
          const locationOffices = offices.filter(
            (office) => office.location === location.id
          );
          return (
            <section key={location.id}>
              <header>
                <h2>{`${location.city} (${locationOffices.length} kontorer)`}</h2>
              </header>
              <OfficeContainer
                place={location.id}
                offices={locationOffices}
                isList={listView}
              />
            </section>
          );
        })}
    </section>
  );
};

export default Offices;
