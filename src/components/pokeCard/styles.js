import styled from 'styled-components';

const Container = styled.div`
  justify-content: space-between;
  border: 1px black solid;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin-top: 1em;
  display : flex;
  height: 10em;
  width: 8em;

    >img {
      border-bottom: 3px solid black;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      background: red;
      height: 6em;
      width: 100%;
      /* margin-top:0 */
    }
    >h3 {
      font-size: 1.2em;
    }
    >p{
      font-size: 0.9em;
      padding: 1px;
      font-weight: bold;
    }
`;

export default Container;
