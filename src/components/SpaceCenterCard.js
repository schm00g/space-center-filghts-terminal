import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GET_DEPARTURE_DETAILS_FROM_PLANET } from '../GraphQL/Queries';

const Card = styled.button`
  color: black; 
  width: 280px;
  background-color: white;
  border-radius: 15px;
  padding: 0 16px 16px 16px;
  margin: 5px;
  border: 3px solid white;
  box-shadow: 1px 2px 4px rgba(0 0 0 / 0.2);
  &:hover {
    box-shadow: 1px 2px 10px rgba(0 0 0 / 0.2);
  }

  // ${({ active }) => active && `
  //   border: 3px solid black;
  // `}
`;
  
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  max-width: 90%;
  line-height: 24px;
  text-align: left;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubTitle = styled(Title)`
  font-weight: 400;
  font-size: 14px;
  color: #717785;
  line-height: 18px
`;

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
      <SubTitle>Number of flights: {totalFlightNumber}</SubTitle>
    </Card>
  )
}

// TODO: use Apollo Cache readQuery to access data

export default SpaceCenterCard