import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_DEPARTURE_DETAILS_FROM_PLANET } from '../GraphQL/Queries';
import FlightCount from './FlightCount';
import { Card, Title} from './styles/Cards.styled';

function SpaceCenterCard({ name, id, setFlights }) {
  const [selectPlanet, { error, data }] = useLazyQuery(GET_DEPARTURE_DETAILS_FROM_PLANET);

  // TODO: capture selected planet to update state/css

  useEffect(() => {
    if(data){
      setFlights(data?.flights?.nodes);
    }
  }, [data, setFlights]);

  if (error){
    console.error(`Error! ${error.message}`);
  };
  
  let svgPath = require(`../assets/planets/planet-${Math.floor(Math.random() * 9 + 1)}.svg`)

  return (
    <Card onClick={() => selectPlanet({ variables: { from: id } })}>
      <img src={svgPath} alt="Planet"/>
      <Title>{name}</Title>
      <FlightCount id={id} />
    </Card>
  )
}

export default SpaceCenterCard;