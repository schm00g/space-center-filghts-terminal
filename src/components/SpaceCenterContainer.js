import React, { useEffect, useState } from 'react'
import SpaceCenterCard from './SpaceCenterCard';
import LoadingSVG from '../assets/planet-loader.svg';
import SidePanel from './SidePanel';
import { useQuery } from '@apollo/client';
import { GET_ALL_SPACE_CENTERS } from '../GraphQL/Queries';
import { motion } from "framer-motion"
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Button, ButtonWrapper, Loading, Wrapper } from './styles/Container.styled';

function SpaceCenterContainer({ numberOfSpaceCenters }) {
  
  const [spaceCenters, setSpaceCenters] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [flights, setFlights] = useState({});
  const [selectedPlanet, setSelectedPlanet] = useState({});
  const [sidePanelShown, setSidePanelShown] = useState(false);

  const { error, loading, data, fetchMore } = useQuery(GET_ALL_SPACE_CENTERS, {
    variables: { page: pageIndex }
  });

  const PAGE_SIZE = 9;
  const NUMBER_OF_PAGES = numberOfSpaceCenters / PAGE_SIZE;

  useEffect(() => {
    if(data){
      setSpaceCenters(data.spaceCenters.nodes);
    }
  }, [data]);

  useEffect(() => {
    if(pageIndex <= 0){
      setPageIndex(0);
    }
    if(pageIndex >= NUMBER_OF_PAGES){
      setPageIndex(NUMBER_OF_PAGES);
    }
  }, [pageIndex, NUMBER_OF_PAGES])

  const handleClick = () => {
    setSidePanelShown(true);
  };

  if(loading){
    return (
      <motion.div 
        initial={{ opacity: 0.1}}
        animate={{ opacity: 0.4}}
        transition={{ duration: 1}}
      >
        <Loading>
          <img src={LoadingSVG} alt="Planet"/>
        </Loading>
      </motion.div>
    )
  }

  if (error){
    console.error(`Error! ${error.message}`);
  } 

  return (
    <div>
      <div>
        {sidePanelShown &&
          <SidePanel flights={flights} selectedPlanet={selectedPlanet} setSidePanelShown={setSidePanelShown}></SidePanel>
        }
      </div>
      <Wrapper>
        {spaceCenters.map((value, i) => {
          return (
            <div onClick={handleClick} key={value.id}>
              <motion.div 
                initial={{ opacity: 0.75, translateX: 0, translateY: 0}}
                animate={{ opacity: 1, translateX: 1, translateY: 1}}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              >
                <SpaceCenterCard setFlights={setFlights} setSelectedPlanet={setSelectedPlanet} name={value.name} id={value.id} planet={value} />
              </motion.div>
            </div>
          )
        })}
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={() => {
          setPageIndex(pageIndex - 1)
          fetchMore({
            variables: { page: pageIndex },
            updateQuery: (_, {fetchMoreResult}) => {
              return fetchMoreResult;
            }
          })
        }}>
          <RiArrowLeftSLine />
          Previous
        </Button>
          <Button onClick={() => {
            setPageIndex(pageIndex + 1);
            fetchMore({
              variables: { page: pageIndex },
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
}

export default SpaceCenterContainer