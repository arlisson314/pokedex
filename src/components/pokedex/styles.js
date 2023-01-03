import styled from 'styled-components';

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: start;
  display: flex;
  height: 100%;
  width: 100%;

    >h1 {
      font-size: 2em;
      padding: 0.5em;
    }

    >div {
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      display: flex;
      width: 100%;
      height: 100%;
      gap: 0.5em;
    }
`;

export default Container;
