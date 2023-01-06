/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiTwotoneStar } from 'react-icons/ai';
import Container from './styles';
import CardItems from '../cardItems';
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

  const addFavorites = () => console.log('oi');

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <Container>
      <CardItems
        pokeInfo={pokeInfo}
        addFavorites={addFavorites}
        handleKeyDown={handleKeyDown}
        icon={<AiTwotoneStar />}
      />
    </Container>
  );
}

export default PokeCard;
