import React, { useState } from 'react';
import DepartureDetails from './DepartureDetails';
import { 
  Button, 
  Departures, 
  Description, 
  FlightCount, 
  Flights, 
  Icon, 
  Panel, 
  Title 
} from './styles/SidePanel.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { useQuery } from '@apollo/client';
import { GET_NUMBER_OF_FLIGHTS } from '../GraphQL/Queries';

function SidePanel({ flights, selectedPlanet, setSidePanelShown }) {
  const { error, data } = useQuery(GET_NUMBER_OF_FLIGHTS, {
    variables: { from: selectedPlanet.id }
  });

  if (error){
    console.error(`Error! ${error.message}`);
  };
  
  const hidePanel = () => {
    // TODO: two components have separate management of toggle state...
    setSidePanelShown(false);
  };

  return (
    <div>
      <Panel>
        <Button onClick={hidePanel}><Icon><AiOutlinePlus></AiOutlinePlus></Icon></Button>
        <Title>{selectedPlanet.name}</Title>
        <Description>{selectedPlanet.description}</Description>
        <Flights>Number of flights:</Flights>
        <FlightCount>{data.flights.pagination.total}</FlightCount>
        <Departures>Departures</Departures>
        <DepartureDetails flights={flights}></DepartureDetails>
      </Panel>
    </div>
  )
}

export default SidePanel;
