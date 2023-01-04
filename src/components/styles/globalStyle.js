import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html, body, #root {
  max-height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, #444444, lightblue);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
`;
