import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_SPACE_CENTERS } from '../GraphQL/Queries';
import SpaceCenterCard from './SpaceCenterCard';
import LoadingSVG from '../assets/planet-loader.svg';
import SidePanel from './SidePanel';
import styled from 'styled-components';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Wrapper = styled.section`
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  max-width: 30%;
  margin: auto;
  padding-top: 2%;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 100px 0.5em;
  justify-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  padding-top: 5%;
  width: 100px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

function SpaceCenterContainer() {
  
  const [spaceCenters, setSpaceCenters] = useState([]);
  const [toggleSidePanel, setToggleSidePanel] = useState(false);
  const [pageIndex, setPageIndex] = useState(0)

  const { error, loading, data, fetchMore } = useQuery(GET_ALL_SPACE_CENTERS, {
    variables: { page: pageIndex }
  });

  useEffect(() => {
    if(data){
      setSpaceCenters(data.spaceCenters.nodes);
    }
  }, [data]);

  useEffect(() => {
    // TODO: rework logic, off by one is 99 limit correct?
    if(pageIndex <= 0){
      setPageIndex(0);
    }
    if(pageIndex >= 99){
      setPageIndex(99)
    }
  }, [pageIndex])

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
      <ButtonWrapper>
        <Button onClick={() => fetchMore({
              variables: { page: setPageIndex(pageIndex - 1) },
              updateQuery: (_, {fetchMoreResult}) => {
                return fetchMoreResult;
              }
            })
          }>
          <RiArrowLeftSLine />
          Previous
        </Button>
          <Button onClick={() => fetchMore({
                variables: { page: setPageIndex(pageIndex + 1) },
                updateQuery: (_, {fetchMoreResult}) => {
                  return fetchMoreResult;
                }
              })
            }>
            Next
            <RiArrowRightSLine />
          </Button>
      </ButtonWrapper>
    </div>
  )
}

export default SpaceCenterContainer