import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { GET_NUMBER_OF_FLIGHTS } from '../GraphQL/Queries';

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #717785;
  line-height: 18px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
`;

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