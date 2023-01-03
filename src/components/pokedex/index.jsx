import React, { useEffect, useState } from 'react';
import PokeCard from '../pokeCard';

import Container from './styles';

function Pokedex() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeListCop, setPokeListCop] = useState([]);
  const [load, setLoad] = useState(true);
  const PokeUrl = 'https://pokeapi.co/api/v2/pokemon/';

  const getPokemons = async () => {
    try {
      // https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
      const response = await fetch(PokeUrl);
      const data = await response.json();
      const { results } = data;
      setPokeList(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const filterPokemonsList = (value) => {
    const filteredName = pokeList
      .filter((pokemon) => pokemon.name.toLowerCase().includes(value.trim().toLowerCase()));
    setPokeListCop(filteredName);
  };

  const list = pokeListCop.length ? pokeListCop : pokeList;
  return (
    <Container>
      <h1>Pokedex</h1>
      <input
        type="text"
        name="searchPokemon"
        onChange={({ target }) => filterPokemonsList(target.value)}
        placeholder="Pesquisar pelo nome"
      />
      <div>
        { load
          ? <h2>loadong...</h2>
          : list.map(({ name, url }) => (
            <PokeCard key={name} url={url} />
          ))}
      </div>
    </Container>
  );
}

export default Pokedex;
