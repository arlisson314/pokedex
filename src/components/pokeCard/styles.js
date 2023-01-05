import styled from 'styled-components';

const Container = styled.div`
  -webkit-box-shadow: 5px 7px 5px 1px rgba(0,0,0,0.51);
  -moz-box-shadow: 5px 7px 5px 1px rgba(0,0,0,0.51);
  box-shadow: 5px 7px 5px 1px rgba(0,0,0,0.51);
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
    >p{
      font-weight: bold;
      font-size: 1em;
      padding: 1px;
    }

    >p:nth-of-type(2) {
      font-size: 0.8em;
      margin-bottom: 0.5em
    }
`;

export default Container;
