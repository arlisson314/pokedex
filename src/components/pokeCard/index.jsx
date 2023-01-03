import React, { useEffect, useState } from 'react';

import Container from './styles';

function PokeCard({ url }) {
  const [pokeInfo, setPokeInfo] = useState(null);

  const pokemon = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokeInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    pokemon();
  }, []);
  // console.log(pokeInfo);
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
