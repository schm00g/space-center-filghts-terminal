import { React, useEffect, useState } from 'react'
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

  return (
    <div>
      {" "}
      {spaceCenters.map((val) => {
        return <SpaceCenterCard name={val.name} totalFlightNumber={10} key={val.id}/>
      })}
    </div>
  )
}

export default SpaceCenterGrid