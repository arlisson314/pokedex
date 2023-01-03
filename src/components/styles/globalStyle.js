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
}
`;
