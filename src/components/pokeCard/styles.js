import styled from 'styled-components';

const Container = styled.div`
  justify-content: space-between;
  background-color: #dbdbdb;
  border: 1px black solid;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin-top: 0.5em;
  display : flex;
  height: 13.5em;
  width: 12em;
  -webkit-box-shadow: 5px 7px 5px 1px rgba(0,0,0,0.51);
  -moz-box-shadow: 5px 7px 5px 1px rgba(0,0,0,0.51);
  box-shadow: 5px 7px 5px 1px rgba(0,0,0,0.51);

    >img {
      border-bottom: 3px solid black;
      /* border-top-right-radius: 3px; */
      /* border-top-left-radius: 3px; */
      background: red;
      height: 8em;
      width: 100%;
    }
    >h3 {
      font-size: 1.2em;
    }
    >p {
      font-weight: bold;
      font-size: 0.9em;
      padding: 1px;
    }

    >p:nth-child(2) {
      font-weight: bold;
      font-size: 0.3em;
    }
`;

export default Container;
