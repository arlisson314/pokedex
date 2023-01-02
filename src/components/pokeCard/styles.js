import styled from 'styled-components';

const Container = styled.div`
  border: 1px black solid;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  display : flex;
  height: 25%;
  width: 15%;

    >img {
      border-bottom: 3px solid black;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      margin-bottom: 30px;
      background: red;
      height: 60.5%;
      width: 100%;
    }
    >h3 {
      font-size: 2em;
      padding: 0.3em;
    }
    >p{
      font-size: 1em;
      padding: 0.5em;
    }
`;

export default Container;
