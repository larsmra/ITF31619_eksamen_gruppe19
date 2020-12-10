import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { officeLocations } from '../data/data';

import OfficeContainer from '../components/OfficeContainer';
import Checklist from '../components/Checklist';

const StyledButtonSection = styled.section`
  padding: 1em 1em 0 1em;
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
`;

const StyledButton = styled.button.attrs(({ pressed }) => ({
  pressed: pressed || false,
}))`
  border: none;
  padding: 1.2em 2.4em;
  background-color: ${({ pressed }) => (pressed ? '#808080' : '#d3d3d3')};
  color: ${({ pressed }) => (pressed ? '#ffffff' : '#000000')};

  &:hover {
    background-color: #808080;
    color: #ffffff;
  }
`;

const StyledIconButton = styled.button.attrs(({ pressed }) => ({
  pressed: pressed || false,
}))`
  appearance: none;
  border: none;
  background-color: transparent;
  & rect {
    fill: ${({ pressed }) => (pressed ? '#479eb9' : '#000000')};
  }
`;

const StyledFilterSection = styled.section`
  background-color: #808080;
  color: #ffffff;
  padding: 0.1em;
`;

const Offices = () => {
  const [viewableLocations, setViewableLocations] = useState(officeLocations);
  const [filter, setFilter] = useState(false);
  const [listView, setListView] = useState(false);

  const handleFilterChange = (location) => {
    location.view = !location.view;
    setViewableLocations([...viewableLocations]);
  };

  return (
    <>
      <Title title="Våre kontorer" />
      <section className="pageContent">
        <StyledButtonSection>
          <StyledButton
            type="button"
            pressed={filter}
            onClick={() => setFilter(!filter)}
          >
            Filter
          </StyledButton>
          <StyledIconButton
            type="button"
            pressed={listView}
            onClick={() => setListView(true)}
          >
            <svg width="2rem" height="2rem">
              <rect x="0.1em" y="0.1em" width="1.8em" height="0.5em" />
              <rect x="0.1em" y="0.75em" width="1.8em" height="0.5em" />
              <rect x="0.1em" y="1.4em" width="1.8em" height="0.5em" />
              List view
            </svg>
          </StyledIconButton>
          <StyledIconButton
            type="button"
            pressed={!listView}
            onClick={() => setListView(false)}
          >
            <svg width="2em" height="2em">
              <rect x="0.1em" y="0.1em" width="0.8em" height="0.8em" />
              <rect x="1.1em" y="0.1em" width="0.8em" height="0.8em" />
              <rect x="0.1em" y="1.1em" width="0.8em" height="0.8em" />
              <rect x="1.1em" y="1.1em" width="0.8em" height="0.8em" />
              Card view
            </svg>
          </StyledIconButton>
        </StyledButtonSection>
        {filter && (
          <StyledFilterSection>
            <Checklist
              values={officeLocations}
              idKey="id"
              nameKey="city"
              booleanKey="view"
              onChange={handleFilterChange}
            />
          </StyledFilterSection>
        )}
        {officeLocations &&
          officeLocations
            .filter((location) => location.view === true)
            .map((location) => (
              <section key={location.id}>
                <header>
                  <h2>{`${location.city} (${location.offices.length} kontorer)`}</h2>
                </header>
                <OfficeContainer
                  place={location.id}
                  offices={location.offices}
                  isList={listView}
                />
              </section>
            ))}
      </section>
    </>
  );
};

export default Offices;
