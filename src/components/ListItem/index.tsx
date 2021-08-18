import React from 'react';

import Logo from '../../assets/imagine.jpg';

import {
  Container,
  LikeContainer,
  ThumbContainer,
  Title,
  Subtitle,
  FavIcon,
  Time,
} from './styles';

const ListItem: React.FC = () => {
  return (
    <Container>
      <ThumbContainer>
        <img src={Logo} alt="" />
        <div>
          <Title>Demons</Title>
          <Subtitle>Imagine Dragons</Subtitle>
        </div>
      </ThumbContainer>

      <LikeContainer>
        <FavIcon />
        <Time>04:56</Time>
      </LikeContainer>
    </Container>
  );
};

export default ListItem;
