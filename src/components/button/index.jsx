import React from 'react';

import Container from './styles';

function Button({ changeOffset, logo }) {
  return (
    <Container>
      <button type="button" onClick={changeOffset}>
        {logo}
      </button>
    </Container>
  );
}

export default Button;
