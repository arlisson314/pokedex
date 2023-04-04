/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Container from './styles';
import CardItems from '../cardItems';
// AiOutlineStar
// AiFillStar
// AiTwotoneStar
function PokeCard({ url }) {
  const [pokeInfo, setPokeInfo] = useState(null);
  const [isClicekd, setIsClicekd] = useState(false);

  const getokemon = () => {
    axios.get(url)
      .then((result) => setPokeInfo(result.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getokemon();
  }, []);

  const addFavorites = (id) => {
    setIsClicekd(!isClicekd);
    console.log(id);
  };

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
        icon={isClicekd ? <AiFillStar /> : <AiOutlineStar />}
      />
    </Container>
  );
}

export default PokeCard;
