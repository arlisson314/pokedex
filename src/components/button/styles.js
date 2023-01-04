import styled from 'styled-components';

const Container = styled.div`
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
`;

export default Container;
