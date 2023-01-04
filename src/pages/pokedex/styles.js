import styled from 'styled-components';

const Container = styled.div`
  flex-direction: column;
  justify-content: start;
  align-items: center;
  display: flex;
  height: 100%;
  width: 1280px;
    >div{
      flex-direction: wrap;
      margin-top:0.4em;
      display: flex;
      gap: 1em;
    }

    >section {
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
