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

function SidePanel({ spaceCenter }) {
  const [sidePanelShown, setSidePanelShown] = useState(true);

  const hidePanel = () => {
    // TODO: two components have separate management of toggle state...
    setSidePanelShown(false);
  };

  return (
    <div>
      {sidePanelShown &&
        <Panel>
          <Button onClick={hidePanel}><Icon><AiOutlinePlus></AiOutlinePlus></Icon></Button>
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
