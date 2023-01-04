import React from 'react';
import Container from './styles';
import PokeLogo from '../../images/PokeLogo.png';

function Header() {
  return (
    <Container>
      <img src={PokeLogo} alt="logo" />
    </Container>
  );
}

export default Header;
