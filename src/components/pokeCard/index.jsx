import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from './styles';

function PokeCard({ url }) {
  const [pokeInfo, setPokeInfo] = useState(null);

  const getokemon = () => {
    axios.get(url)
      .then((result) => setPokeInfo(result.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getokemon();
  }, []);

  return (
    <Container>
      <img
        src={pokeInfo?.sprites.other['official-artwork'].front_default}
        alt={pokeInfo?.name}
      />
      <h3>{pokeInfo?.name}</h3>
      <p>{`Level - ${pokeInfo?.base_experience}`}</p>
      {pokeInfo?.types.length > 1
        ? (<p>{`Tipos - ${pokeInfo?.types[0].type.name}, ${pokeInfo?.types[1].type.name}`}</p>)
        : (<p>{`Tipo - ${pokeInfo?.types[0].type.name}`}</p>
        )}
    </Container>
  );
}

export default PokeCard;
