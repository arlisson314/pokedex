import React from 'react';

import Container from './styles';

function Input({ setInputValue, inputRef }) {
  return (
    <Container>
      <input
        type="text"
        ref={inputRef}
        name="searchPokemon"
        onChange={({ target }) => setInputValue(target.value.trim())}
        placeholder="Pesquisar pelo nome"
      />
    </Container>
  );
}

export default Input;
