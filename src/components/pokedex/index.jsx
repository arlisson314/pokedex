import React, { useEffect, useState } from 'react';
import PokeCard from '../pokeCard';

import Container from './styles';

function Pokedex() {
  const [pokeList, setPokeList] = useState([]);
  const [load, setLoad] = useState(true);

  const getPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
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
  return (
    <Container>
      <h1>Pokedex</h1>
      <div>
        { load
          ? <h2>loadong...</h2>
          : pokeList.map(({ name, url }) => (
            <PokeCard key={name} url={url} />
          ))}
      </div>
    </Container>
  );
}

export default Pokedex;
