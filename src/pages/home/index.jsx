import React, { useEffect, useState, useRef } from 'react';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import axios from 'axios';
import PokeCard from '../../components/pokeCard';
import Button from '../../components/button';
import Input from '../../components/input';

import Container from './styles';
import Header from '../../components/header/Header';

function Home() {
  const [pokeList, setPokeList] = useState([]);
  const [filteredPokeList, setFilteredPokeList] = useState([]);
  const [load, setLoad] = useState(true);
  const [offsetNum, setffsetNum] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const pokeUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offsetNum}&limit=40`;

  const getPokemons = () => {
    axios.get(pokeUrl)
      .then((result) => setPokeList(result.data.results))
      .catch((err) => console.error(err))
      .finally(() => setLoad(false));
  };

  const filterPokemonsList = () => {
    const filteredName = pokeList
      .filter((pokemon) => pokemon.name.toLowerCase().trim()
        .includes(inputValue.toLowerCase().trim()));

    setFilteredPokeList(filteredName);

    if (inputValue === '') {
      setFilteredPokeList([]);
    }
  };

  useEffect(() => {
    getPokemons();
    filterPokemonsList();
  }, [offsetNum, inputValue]);

  const offsetIncrement = () => {
    setffsetNum(offsetNum + 20);
    setInputValue('');
    inputRef.current.value = '';
  };

  const offsetDecrement = () => {
    if (offsetNum > 0) {
      setffsetNum(offsetNum - 20);
      setInputValue('');
      inputRef.current.value = '';
    }
  };

  const list = filteredPokeList.length ? filteredPokeList : pokeList;

  return (
    <Container>
      <Header />
      <Input setInputValue={setInputValue} inputRef={inputRef} />
      <div>
        <Button logo={<FaCaretLeft />} changeOffset={offsetDecrement} />
        <Button logo={<FaCaretRight />} changeOffset={offsetIncrement} />
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

export default Home;
