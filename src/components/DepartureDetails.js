import React from 'react'
import PlanetSVG from '../assets/planet-loader.svg';
import styled from  'styled-components';

const Container = styled.div`
  display: grid;
  justify-content: stretch;  
  padding-top: 2%;
`;

const PlanetAvatar = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  max-width: 55px;
  padding: 3% 0.5% 1.5% 0.5%;
  grid-column: 1 / 5;
  grid-row: 1 / 1;
`;

// TODO: should styled be intertwined with logic?
const FlightDetails = styled.div`
  grid-column: 2 / 5;
  grid-row: 1 / 1;
  font-weight: 600;
`;

const Times = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: grey;
`;

function DepartureDetails() {
  return (
    <Container>
      <PlanetAvatar>
        <img style={{width: "55px"}} src={PlanetSVG} alt="planet icon"></img>
      </PlanetAvatar>
      <FlightDetails>
        <div>To: Planet Delta</div>
        <Times>12/02/2022 - 12:03</Times>
      </FlightDetails>
    </Container>
  )
}

export default DepartureDetails