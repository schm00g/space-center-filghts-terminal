import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
`;

export const Loading = styled.div`
  background-color: white;
  border-radius: 15px;
  position: absolute;
  left: 40%;
  top: 35%;
`;

export const ButtonWrapper = styled.div`
  max-width: 30%;
  margin: auto;
  padding-top: 2%;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 100px 0.5em;
  justify-items: center;
`;

export const Button = styled.button`
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