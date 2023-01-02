import styled from 'styled-components';

const Container = styled.div`
  flex-direction: column;
  border: 1px solid red;
  align-items: center;
  display: flex;
  height: 100vw;
  width: 95vw;
  gap: 1em;

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
      height: 90%;
      gap: 1em;
    }
`;

export default Container;
