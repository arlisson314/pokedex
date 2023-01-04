import React, { useEffect, useState } from 'react';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import PokeLogo from '../../images/PokeLogo.png';
import PokeCard from '../../components/pokeCard';
import Button from '../../components/button';
import Input from '../../components/input';

import Container from './styles';

function Pokedex() {
  const [pokeList, setPokeList] = useState([]);
  const [filteredPokeList, setFilteredPokeListCop] = useState([]);
  const [load, setLoad] = useState(true);
  const [offsetNum, setffsetNum] = useState(0);
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offsetNum}&limit=20`;

  const getPokemons = async () => {
    try {
      const response = await fetch(pokeUrl);
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
  }, [offsetNum]);

  const filterPokemonsList = (value) => {
    const filteredName = pokeList
      .filter((pokemon) => pokemon.name.toLowerCase().includes(value.trim().toLowerCase()));
    setFilteredPokeListCop(filteredName);
  };

  const incrementNumPoke = () => {
    setffsetNum(offsetNum + 20);
  };

  const decrementNumPoke = () => {
    if (offsetNum > 0) {
      setffsetNum(offsetNum - 20);
    }
  };

  const list = filteredPokeList.length ? filteredPokeList : pokeList;

  return (
    <Container>
      <img src={PokeLogo} alt="logo" />
      <Input filterPokemonsList={filterPokemonsList} />
      <div>
        <Button logo={<FaCaretLeft />} decrementNumPoke={decrementNumPoke} />
        <Button logo={<FaCaretRight />} decrementNumPoke={incrementNumPoke} />
      </div>
      <section>
        { load
          ? <h2>loadong...</h2>
          : list.map(({ name, url }) => (
            <PokeCard key={name} url={url} />
          ))}
      </section>
    </Container>
  );
}

export default Pokedex;
