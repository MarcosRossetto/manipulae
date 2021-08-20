import React from 'react';

import { useLocation } from 'react-router-dom';

import { Container, Item } from './styles';

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <Item active={location.pathname === '/' ? 1 : 0} to="/">
        Home
      </Item>
      <Item active={location.pathname === '/favorites' ? 1 : 0} to="/favorites">
        Favoritos
      </Item>
    </Container>
  );
};

export default Menu;
