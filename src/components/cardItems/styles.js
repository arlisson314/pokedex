import styled from 'styled-components';

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;

    >img {
      border-bottom: 3px solid black;
      background: red;
      height: 8em;
      width: 100%;
    }

    >h3 {
      font-size: 1.2em;
      margin-top: 0.3em;
    }
    >p{
      align-items: center;
      font-weight: bold;
      font-size: 1em;
      display: flex;
      padding: 1px;
      gap: 1ch;
    
      >button {
        align-self: center;
        font-size: 1.5em;
        background: none;
        display: flex;
        color: yellow;
        border: none;
        outline: none;
      }
      >button:hover {
        cursor: pointer;
       
      }
    }
    
    >p:nth-of-type(2) {
      margin-bottom: 0.5em;
      font-weight: bold;
      font-size: 1em;
    }
  
`;

export default Container;
