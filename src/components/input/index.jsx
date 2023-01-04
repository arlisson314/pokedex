import React from 'react';

import Container from './styles';

function Input({ filterPokemonsList }) {
  return (
    <Container>
      <input
        type="text"
        name="searchPokemon"
        onChange={({ target }) => filterPokemonsList(target.value)}
        placeholder="Pesquisar pelo nome"
      />
    </Container>
  );
}

export default Input;
