import React from 'react';
import ListItem from '../ListItem';

import { Container } from './styles';

const List: React.FC = () => {
  return (
    <Container>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Container>
  );
};

export default List;
