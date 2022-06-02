import React from 'react'
import PlanetSVG from '../assets/planet-loader.svg';
import { Container, FlightDetails, PlanetAvatar, Times } from './styles/Global';

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

export default DepartureDetails;