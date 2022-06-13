import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: stretch;  
  padding-top: 2%;
`;

export const PlanetAvatar = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  max-width: 55px;
  padding: 3% 0.5% 1.5% 0.5%;
  grid-column: 1 / 5;
  grid-row: 1 / 1;
`;

export const FlightDetails = styled.div`
  padding-left: 2%;
  grid-column: 2 / 5;
  grid-row: 1 / 1;
  font-weight: 600;
`;

export const Times = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: grey;
`;