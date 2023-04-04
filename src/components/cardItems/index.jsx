import React from 'react';

import Container from './styles';

function CardItems({
  pokeInfo, addFavorites, icon, handleKeyDown,
}) {
  return (
    <Container>
      <img
        src={pokeInfo?.sprites.other['official-artwork'].front_default}
        alt={pokeInfo?.name}
      />
      <h3>{`${pokeInfo?.id}. ${pokeInfo?.name}`}</h3>
      <p>
        {`Level - ${pokeInfo?.base_experience}`}
        <button type="button" onClick={() => addFavorites(pokeInfo?.id)} onKeyDown={(e) => handleKeyDown(e)}>{icon}</button>
      </p>
      {pokeInfo?.types.length > 1
        ? (<p>{`Tipos: ${pokeInfo?.types[0].type.name}, ${pokeInfo?.types[1].type.name}`}</p>)
        : (<p>{`Tipo: ${pokeInfo?.types[0].type.name}`}</p>
        )}
    </Container>
  );
}

export default CardItems;
