import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_SPACE_CENTERS } from '../GraphQL/Queries';
import SpaceCenterCard from './SpaceCenterCard';

function SpaceCenterGrid() {
  
  const { error, loading, data } = useQuery(GET_ALL_SPACE_CENTERS);
  const [spaceCenters, setSpaceCenters] = useState([]);

  useEffect(() => {
    if(data){
      setSpaceCenters(data.spaceCenters.nodes);
    }
  }, [data]);
  
  if(loading){
    return <div><h1>Loading...</h1></div>;
  };

  if (error){
    console.error(`Error! ${error.message}`);
  }; 

  return (
    <div>
      {" "}
      {spaceCenters.map((val) => {
        return <SpaceCenterCard name={val.name} totalFlightNumber={10} id={Number(val.id)} key={val.id}/>
      })}
    </div>
  )
}

export default SpaceCenterGrid