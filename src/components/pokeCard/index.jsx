/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiTwotoneStar } from 'react-icons/ai';
import Container from './styles';
// AiOutlineStar
// AiFillStar
// AiTwotoneStar
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

  const test = () => console.log('oi');

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <Container>
      <img
        src={pokeInfo?.sprites.other['official-artwork'].front_default}
        alt={pokeInfo?.name}
      />
      <h3>{`${pokeInfo?.id}. ${pokeInfo?.name}`}</h3>
      <p>
        {`Level - ${pokeInfo?.base_experience}`}
        <button type="button" onClick={test} onKeyDown={(e) => handleKeyDown(e)}><AiTwotoneStar /></button>
      </p>
      {pokeInfo?.types.length > 1
        ? (<p>{`Tipos: ${pokeInfo?.types[0].type.name}, ${pokeInfo?.types[1].type.name}`}</p>)
        : (<p>{`Tipo: ${pokeInfo?.types[0].type.name}`}</p>
        )}
    </Container>
  );
}

export default PokeCard;
