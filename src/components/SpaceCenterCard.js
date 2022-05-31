import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GET_DESTINATIONS_FROM_PLANET } from '../GraphQL/Queries';

const Wrapper = styled.section`
  width: 300px;
  display: inline-grid;
`;

const Card = styled.button`
  color: black; 
  background-color: white;
  border-radius: 15px;
  padding: 0 16px 16px 16px;
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

// TODO: use Apollo Cache readQuery to access data

export default SpaceCenterCard