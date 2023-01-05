import React from 'react';
// import Home from './pages/home';
import GlobalStyle from './components/styles/globalStyle';
import MainRouts from './rotas/routes';
/*
  Consumir a API e listar todos os poquemons da consulta do seguinte endpoint
  https://pokeapi.co/api/v2/pokemon/

  Exiba de cada pokemon
  - image
  - nome
  -experiência

  aceesar informcôes individuais de cada pokemono no endpoint
  https://pokeapi.co/api/v2/pokemon/:id

  dicas => sprites.front_default
  experiência => base_experience
*/
function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <Home /> */}
      <MainRouts />
    </div>
  );
}

export default App;
