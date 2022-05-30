import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  font-size: 16px;
  color: black; 
  width 408px;
  background-color: white;
  border-radius: 15px;
  padding: 32px;
  margin: 5px;
  text-align: left;
`;

const Title = styled.div`
  padding-top: 48px;
  font-size: 18px;
  width: 300px;
  display: inline-grid;
  font-weight: 800;
  font-size: 32px;
`;

const Description = styled.div`
  padding-top: 12px;
  font-weight: 400;
  color: #717785;
`;

const Flights = styled.div`
  padding-top: 25px;
  color: black; 
`;

const FlightCount = styled.div`
  font-weight: 600;
`;

const Departures = styled.div`
  padding-top: 25px;
  text-transform: uppercase;
  color: #717785;
  font-weight: 600;
`;

function SidePanel() {

  // const client = useApolloClient();

  return (
    <Panel>
      <Title>Wolf Valley Space Center</Title>
      <Description>
        Yada yada yada yada yada yada yada yada
        Yada yada yada yada yada yada yada yada
        Yada yada yada yada yada yada yada yada
        Yada yada yada yada yada yada yada yada
      </Description>
      <Flights>Number of flights:</Flights>
      <FlightCount>1234</FlightCount>
      <Departures>Departures</Departures>
    </Panel>
  )
}

export default SidePanel;

// TODO: use makeVar apollo cache