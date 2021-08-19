import React from 'react';

import Header from '../../components/Header';
import List from '../../components/List';
import Menu from '../../components/Menu';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <List />
      <Menu />
    </Container>
  );
};

export default Home;
