import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_DEPARTURE_DETAILS_FROM_PLANET } from '../GraphQL/Queries';
import FlightCount from './FlightCount';
import { Card, Title} from './styles/Cards.styled';

function SpaceCenterCard({ name, id, setFlights, setSelectedPlanet, planet }) {
  const [selectPlanet, { error, data }] = useLazyQuery(GET_DEPARTURE_DETAILS_FROM_PLANET);

  useEffect(() => {
    if(data){
      setFlights(data?.flights?.nodes);
    }
  }, [data, setFlights]);

  const handleClick = (id) => {
    setSelectedPlanet(planet);
    selectPlanet({ variables: { from: id } });
  };

  if (error){
    console.error(`Error! ${error.message}`);
  };
  
  let svgPath = require(`../assets/planets/planet-${Math.floor(Math.random() * 9 + 1)}.svg`)

  return (
    <Card onClick={() => handleClick(id)}>
      <img src={svgPath} alt="Planet"/>
      <Title className="space-center-card-title">{name}</Title>
      <FlightCount id={id} />
    </Card>
  )
}

export default SpaceCenterCard;