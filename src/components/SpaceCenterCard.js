import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_DEPARTURE_DETAILS_FROM_PLANET } from '../GraphQL/Queries';
import FlightCount from './FlightCount';
import { Card, Title} from './styles/Cards.styled';

function SpaceCenterCard({ name, totalFlightNumber, id }) {
  const [selectPlanet, { error, loading, data }] = useLazyQuery(GET_DEPARTURE_DETAILS_FROM_PLANET);
  const [flights, setFlights] = useState([]);

  // TODO: capture selected planet to update state/css
  // https://www.youtube.com/watch?v=n9-rwQmnzYA

  useEffect(() => {
    if(data){
      console.log(`data: `, data);
      setFlights(data);
    }
  }, [data]);

  if(loading){
    // console.log("Loading...");
  };

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

// TODO: use Apollo Cache readQuery to access data

export default SpaceCenterCard;