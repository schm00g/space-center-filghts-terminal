import React, { useState } from 'react';
import DepartureDetails from './DepartureDetails';
import styled from 'styled-components';
import { useApolloClient } from '@apollo/client';

const Panel = styled.section`
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

const Button = styled.button`
  position: absolute;
  background-color: #f0f0f0;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  color: grey;
  &:hover {
    background-color: #e8e9eb;
  }
`;

const Icon = styled.div`
  transform: rotate(-45deg) translateX(0.5px) translateY(-1px);
  font-size: 25px;
`;

function SidePanel({ spaceCenter }) {
  // https://www.youtube.com/watch?v=6_39tpIBGIA
  
  const client = useApolloClient();

  // const { flights } = client.readQuery({
  //   query: GET_DEPARTURE_DETAILS_FROM_PLANET,
  //   variables: {
  //     id: 4,
  //   }
  // });

  console.log(`Client: `, client.readQuery);
  // console.log(`readQuery: `, flights);

  const [sidePanelShown, setSidePanelShown] = useState(true);

  const hidePanel = () => {
    // TODO: two components have separate management of toggle state...
    setSidePanelShown(false);
  };

  return (
    <div>
      {sidePanelShown &&
        <Panel>
          <Button onClick={hidePanel}><Icon>+</Icon></Button>
          <Title>{spaceCenter}</Title>
          <Description>
            Yada yada yada yada yada yada yada yada
            Yada yada yada yada yada yada yada yada
            Yada yada yada yada yada yada yada yada
            Yada yada yada yada yada yada yada yada
          </Description>
          <Flights>Number of flights:</Flights>
          <FlightCount>1234</FlightCount>
          <Departures>Departures</Departures>
          <DepartureDetails></DepartureDetails>
        </Panel>
      }
    </div>
  )
}

export default SidePanel;

// TODO: use makeVar apollo cache