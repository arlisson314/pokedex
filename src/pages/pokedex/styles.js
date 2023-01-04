import styled from 'styled-components';

const Container = styled.div`
  flex-direction: column;
  justify-content: start;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;

    >h1 {
      font-size: 2em;
      padding: 0.5em;
    }

    >div{
      flex-direction: wrap;
      margin-top:0.4em;
      display: flex;
      gap: 1em;

      >button {
        justify-content: center;
        align-items: center;
        border-style: solid;
        border-color: black;
        border-radius: 5px;
        border-width: 1px;
        font-size: 1.5em;
        transition: 01s;
        outline: none;
        display: flex;
        color: black;
        height: 1em;
        width: 3em;
        padding: 0;
      }
    
      >button:hover {
        cursor: pointer;
        background: red;
        outline: none;
        color: white;
        border: none;
      }
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
