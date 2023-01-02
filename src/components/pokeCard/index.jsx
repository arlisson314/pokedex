import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

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

  return (
    <div>
      <h3>{pokeInfo?.name}</h3>
      <img
        src={pokeInfo?.sprites.other['official-artwork'].front_default}
        alt={pokeInfo?.name}
      />
      <p>{`Level - ${pokeInfo?.base_experience}`}</p>
    </div>
  );
}

export default PokeCard;
