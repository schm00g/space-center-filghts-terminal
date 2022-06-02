import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { GET_NUMBER_OF_FLIGHTS } from '../GraphQL/Queries';
import { SubTitle } from './styles/Cards.styled';

function FlightCount({id}) {
  const [numberOfFlights, setNumberOfFlights] = useState(" ... ");
  
  const { error, data } = useQuery(GET_NUMBER_OF_FLIGHTS, {
    variables: { from: id }
  });
  
  if (error){
    console.error(`Error! ${error.message}`);
  };
  
  useEffect(() => {
    if(data){
      setNumberOfFlights(data.flights.pagination.total);
    }
  }, [data]);
  
  return (
    <SubTitle>Number of flights: {numberOfFlights}</SubTitle>
  )
}

export default FlightCount;