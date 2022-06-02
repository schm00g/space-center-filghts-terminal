import styled from 'styled-components';

export const Card = styled.button`
  color: black; 
  width: 280px;
  background-color: white;
  border-radius: 15px;
  padding: 0 16px 16px 16px;
  margin: 5px;
  border: 3px solid white;
  box-shadow: 1px 2px 4px rgba(0 0 0 / 0.1);
  &:hover {
    box-shadow: 1px 2px 10px rgba(0 0 0 / 0.1);
  }

  // ${({ active }) => active && `
  //   border: 3px solid black;
  // `}
`;
  
export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  max-width: 90%;
  line-height: 24px;
  text-align: left;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #717785;
  line-height: 18px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
`;