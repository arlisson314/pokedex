import React from 'react';

import Container from './styles';

function Button({ decrementNumPoke, logo }) {
  return (
    <Container>
      <button type="button" onClick={decrementNumPoke}>
        {logo}
      </button>
    </Container>
  );
}

export default Button;
