import React from 'react';

import {
  Container,
  ContainerDeezer,
  Deezer,
  Mask,
  ContainerPlayer,
  Title,
  PlayIcon,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Mask />
      <ContainerDeezer>
        <Deezer>Ouvir no Deezer</Deezer>
      </ContainerDeezer>

      <ContainerPlayer>
        <Title>Demons</Title>
        <PlayIcon />
      </ContainerPlayer>
    </Container>
  );
};

export default Header;
