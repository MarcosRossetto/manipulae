import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store/index';

import Header from '../../components/Header';
import ListFavorites from '../../components/ListFavorites';
import Menu from '../../components/Menu';

import { Container } from './styles';

const Favorite: React.FC = () => {
  return (
    <Container>
      <Provider store={store}>
        <Header />
        <ListFavorites />
        <Menu />
      </Provider>
    </Container>
  );
};

export default Favorite;
