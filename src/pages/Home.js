import React, { useEffect, useState } from 'react'
import { GET_NUMBER_OF_SPACE_CENTERS } from '../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import SpaceCenterContainer from '../components/SpaceCenterContainer';
import '../App.css';

function Home() {
  const { data } = useQuery(GET_NUMBER_OF_SPACE_CENTERS);

  const [numberOfSpaceCenters, setNumberOfSpaceCenters] = useState(0);

  useEffect(() => {
    setNumberOfSpaceCenters(data?.spaceCenters.pagination.total)
  }, [data])

  return (
    <div className="home-page">
        <h1>Spacious</h1>
        <SpaceCenterContainer numberOfSpaceCenters={numberOfSpaceCenters} />
    </div>
  )
}

export default Home;