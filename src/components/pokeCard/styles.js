import styled from 'styled-components';

const Container = styled.div`
  justify-content: space-between;
  border: 1px black solid;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin-top: 1em;
  display : flex;
  height: 11em;
  width: 8em;

    >img {
      border-bottom: 3px solid black;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      background: red;
      height: 6em;
      width: 100%;
    }
    >h3 {
      font-size: 1.2em;
    }
    >p{
      font-weight: bold;
      font-size: 0.9em;
      padding: 1px;
    }
`;

export default Container;
