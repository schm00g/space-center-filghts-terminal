import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_SPACE_CENTERS } from '../GraphQL/Queries';
import SpaceCenterCard from './SpaceCenterCard';
import LoadingSVG from '../assets/planet-loader.svg';


function SpaceCenterGrid() {
  
  const { error, loading, data } = useQuery(GET_ALL_SPACE_CENTERS);

  const [spaceCenters, setSpaceCenters] = useState([]);

  useEffect(() => {
    if(data){
      setSpaceCenters(data.spaceCenters.nodes);
    }
  }, [data]);
  
  if(loading){
    // TODO: have <SpaceCenterGrid> take img as input?
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
      {" "}
      {spaceCenters.map((val) => {
        return <SpaceCenterCard name={val.name} totalFlightNumber={10} id={val.id} key={val.id}/>
      })}
    </div>
  )
}

export default SpaceCenterGrid