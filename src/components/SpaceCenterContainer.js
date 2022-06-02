import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_SPACE_CENTERS } from '../GraphQL/Queries';
import SpaceCenterCard from './SpaceCenterCard';
import LoadingSVG from '../assets/planet-loader.svg';
import SidePanel from './SidePanel';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

function SpaceCenterContainer() {
  
  const { error, loading, data } = useQuery(GET_ALL_SPACE_CENTERS);

  const [spaceCenters, setSpaceCenters] = useState([]);
  const [toggleSidePanel, setToggleSidePanel] = useState(false);

  useEffect(() => {
    if(data){
      setSpaceCenters(data.spaceCenters.nodes);
    }
  }, [data]);

  const handleClick = () => {
    setToggleSidePanel(true);
  };

  if(loading){
    // TODO: have <SpaceCenterContainer> take img as input?
    return (
      <div>
        <img src={LoadingSVG} alt="Planet"/>
      </div>
    )
  };

  if (error){
    console.error(`Error! ${error.message}`);
  }; 

  return (
    <div>
      <div>
        {toggleSidePanel &&
          <SidePanel spaceCenter={spaceCenters?.find(x => x.id === "1")?.name} />
        }
      </div>
      <Wrapper>
        {spaceCenters.map((value) => {
          return (
            <div onClick={handleClick} key={value.id}>
              <SpaceCenterCard name={value.name} totalFlightNumber={10} id={value.id} />
            </div>
          )
        })}
      </Wrapper>
    </div>
  )
}

export default SpaceCenterContainer