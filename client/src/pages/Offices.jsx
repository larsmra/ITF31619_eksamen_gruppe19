import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { locations, offices } from '../data/data';

import OfficeContainer from '../components/OfficeContainer';

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
  background-color: ${({ pressed }) => (pressed ? '#479eb9' : '#e8e8e8')};
  color: ${({ pressed }) => (pressed ? '#ffffff' : '#000000')};
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
  background-color: #479eb9;
  color: #ffffff;
  padding: 0.1em;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const StyledListElement = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  appearance: none;
  background-color: #ffffff;
  border: 0.2em solid #ffffff;
  border-radius: 0.2em;
  padding: 0.3em;
  display: inline-block;

  &:checked {
    background-color: #000000;
  }
`;

const StyledLabel = styled.label`
  margin-left: 0.5em;
`;

const Offices = () => {
  const [availableLocations, setAvailableLocations] = useState(locations);
  const [filter, setFilter] = useState(false);
  const [listView, setListView] = useState(false);

  const handleChange = (id) => {
    const temp = [...locations];
    const filtered = temp.filter((location) => location.id === id).shift();
    filtered.view = !filtered.view;
    setAvailableLocations(temp);
  };

  return (
  <>
    <Title title="Våre kontorer"/>
    <section>
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
          <svg width="2em" height="2em">
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
          <StyledList>
            {availableLocations &&
              availableLocations.map((location) => (
                <StyledListElement key={location.id}>
                  <StyledCheckbox
                    name={location.city}
                    type="checkbox"
                    checked={location.view}
                    onChange={() => handleChange(location.id)}
                  />
                  <label htmlFor={location.city}>{location.city}</label>
                </StyledListElement>
              ))}
          </StyledList>
        </StyledFilterSection>
      )}
      {locations &&
        locations
          .filter((location) => location.view === true)
          .map((location) => {
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
    </>
  );
};

export default Offices;
