import React from 'react';

import { Container, Item } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Item>Home</Item>
      <Item>Favoritos</Item>
    </Container>
  );
};

export default Menu;
