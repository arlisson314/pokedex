import React from 'react';
import Pokedex from './components/pokedex/pokedex';
/*
  Consumir a API e listar todos os poquemons da consulta do seguinte endpoint
  https://pokeapi.co/api/v2/pokemon/

  Exiba de cada pokemon
  - image
  - nome
  -experiência

  aceesar informcôes individuais de cada pokemono no endpoint
  https://pokeapi.co/api/v2/pokemon/:id

  dicas => sprint.front_default
  experiência => base_experience
*/
function App() {
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

export default App;
