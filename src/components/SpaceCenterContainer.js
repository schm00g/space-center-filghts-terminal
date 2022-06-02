import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_SPACE_CENTERS } from '../GraphQL/Queries';
import SpaceCenterCard from './SpaceCenterCard';
import LoadingSVG from '../assets/planet-loader.svg';
import SidePanel from './SidePanel';
import { motion } from "framer-motion"
import styled from 'styled-components';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Wrapper = styled.section`
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
`;

const Loading = styled.div`
  position: absolute;
  left: 40%;
  top: 35%;
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
      console.log(pageIndex);
    }
    if(pageIndex >= 99){
      setPageIndex(99);
      console.log(pageIndex);
    }
  }, [pageIndex])

  const handleClick = () => {
    setToggleSidePanel(true);
  };

  if(loading){
    // TODO: have <SpaceCenterContainer> take img as input?
    return (
      <motion.div 
        initial={{ opacity: 0.2}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.7 }}
      >
        <Loading>
          <img src={LoadingSVG} alt="Planet"/>
        </Loading>
      </motion.div>
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
        {spaceCenters.map((value, i) => {
          return (
            <div onClick={handleClick} key={value.id}>
              <motion.div 
                initial={{ opacity: 0.75, translateX: 0, translateY: 0}}
                animate={{ opacity: 1, translateX: 1, translateY: 1}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <SpaceCenterCard name={value.name} totalFlightNumber={10} id={value.id} />
              </motion.div>
            </div>
          )
        })}
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={() => {
          fetchMore({
            variables: { page: setPageIndex(pageIndex - 1) },
            updateQuery: (_, {fetchMoreResult}) => {
              return fetchMoreResult;
            }
          })
        }}>
          <RiArrowLeftSLine />
          Previous
        </Button>
          <Button onClick={() => {
            fetchMore({
              variables: { page: setPageIndex(pageIndex + 1) },
              updateQuery: (_, {fetchMoreResult}) => {
                return fetchMoreResult;
              }
            })
          }}>
            Next
            <RiArrowRightSLine />
          </Button>
      </ButtonWrapper>
    </div>
  )
};

// TODO: fix me -> Uncaught (in promise) Error: Response not successful: Received status code 400

export default SpaceCenterContainer