import React from 'react'
import PlanetSVG from '../assets/planet-loader.svg';
import { Container, FlightDetails, PlanetAvatar, Times } from './styles/Global';

function DepartureDetails({ flights }) {
  return (
    <div>
      {flights.length && flights.map((value) => {
        return (
          <Container key={value.id}>
            <PlanetAvatar>
              <img style={{width: "55px"}} src={PlanetSVG} alt="planet icon"></img>
            </PlanetAvatar>
            <FlightDetails>
              <div>To Planet: {value.landingSite.planet.name}</div>
              <Times>{value.departureAt.split("T")[0]} - {value.departureAt.split("T")[1].split(".")[0]}</Times>
            </FlightDetails>
          </Container>
        )
      })}
    </div>
  )
}

export default DepartureDetails;