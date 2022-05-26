import React from 'react'
import styled from 'styled-components';
import Planet from '../assets/planets/planet-3.svg';

const Card = styled.div`
  font-size: 0.6em;
  color: black;
  background-color: white;
  border-radius: 15px;
  padding: 5%;
  margin: 3%;
  `;
  
const Title = styled.div`
  font-weight: 800;
  text-align: left;
  font-size: 0.8em;
  color: black;
`;

const SubTitle = styled(Title)`
  font-weight: 600;
  color: lightgrey;
`;

function SpaceCenterCard({name, totalFlightNumber}) {
  return (
    <Card>
      <img src={Planet} alt="Planet"/>
      <Title>{name}</Title>
      <SubTitle>Number of flights: {totalFlightNumber}</SubTitle>
    </Card>
  )
}

export default SpaceCenterCard