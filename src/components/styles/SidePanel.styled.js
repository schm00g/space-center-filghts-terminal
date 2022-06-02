import styled from 'styled-components';

export const Panel = styled.section`
    font-size: 16px;
    color: black; 
    width 408px;
    background-color: white;
    border-radius: 15px;
    padding: 32px;
    margin: 5px;
    text-align: left;
    box-shadow: 1px 2px 4px rgba(0 0 0 / 0.1);
`;

export const Title = styled.div`
    padding-top: 48px;
    font-size: 18px;
    width: 300px;
    display: inline-grid;
    font-weight: 800;
    font-size: 32px;
`;

export const Description = styled.div`
    padding-top: 12px;
    font-weight: 400;
    color: #717785;
`;

export const Flights = styled.div`
    padding-top: 25px;
    color: black; 
`;

export const FlightCount = styled.div`
    font-weight: 600;
`;

export const Departures = styled.div`
    padding-top: 25px;
    text-transform: uppercase;
    color: #717785;
    font-weight: 600;
`;

export const Button = styled.button`
    position: absolute;
    background-color: #f0f0f0;
    border: none;
    padding: 6px 8px;
    border-radius: 5px;
    color: grey;
    &:hover {
        background-color: #e8e9eb;
    }
`;

export const Icon = styled.div`
    transform: rotate(-45deg) translateX(1px) translateY(1px);
    font-size: 25px;
`;