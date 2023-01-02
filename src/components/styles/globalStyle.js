import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  max-height: 100vh;
  max-width: 100vw;
  margin: auto;
  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;
}
`;
