import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GET_DESTINATIONS_FROM_PLANET } from '../GraphQL/Queries';

const Wrapper = styled.div`
  width: 300px;
  display: inline-grid;
`;

const Card = styled.button`
  font-size: 18px;
  color: black; 
  background-color: white;
  border-radius: 15px;
  padding: 5px;
  margin: 5px;
  border: 3px solid white;
  &:hover {
    border: 3px solid #f0f2f0;
  }

  // ${({ active }) => active && `
  //   border: 3px solid black;
  // `}
`;
  
const Title = styled.div`
  max-width: 90%;
  font-weight: 800;
  text-align: left;
  font-size: 0.8em;
  color: black;
`;

const SubTitle = styled(Title)`
  font-weight: 600;
  color: lightgrey;
`;

function SpaceCenterCard({ name, totalFlightNumber, id }) {
  const [selectPlanet, { error, loading, data }] = useLazyQuery(GET_DESTINATIONS_FROM_PLANET);
  const [destinations, setDestinations] = useState([]);

  // TODO: capture selected planet to update state/css

  useEffect(() => {
    if(data){
      console.log(data.flights.nodes);
      setDestinations(data.flights.nodes);
    }
  }, [data]);

  if(loading){
    console.log("Loading...");
  };

  if (error){
    console.error(`Error! ${error.message}`);
  };
  
  let svgPath = require(`../assets/planets/planet-${id % 10}.svg`)

  return (
    <Wrapper>
      <Card onClick={() => selectPlanet({ variables: { from: id } })}>
        <img src={svgPath} alt="Planet"/>
        <Title>{name}</Title>
        <SubTitle>Number of flights: {totalFlightNumber}</SubTitle>
      </Card>
    </Wrapper>
  )
}

// TODO: send props/events to side panel component

export default SpaceCenterCard