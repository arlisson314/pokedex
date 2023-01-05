import styled from 'styled-components';

const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  border: solid 1px red;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
  
  >section {
    border: solid 1px black;
    display: flex;
    height: 100%;
    width: 90%;
  }
  >section div:nth-child(1) {
    border: solid 1px yellow;
    height: 6em;
    width: 5em;
  }
  >section div:nth-child(2) {
    border: solid 1px yellow;
    height: 6em;
    width: 5em;
  }
  
`;

export default Container;
