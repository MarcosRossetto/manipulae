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
  const controlsSong = () => {
    let control = document.getElementById('audioPlayer') as any;
    if (!control.paused && !control.ended) {
      control.pause();
      document.getElementById('playIcon')?.classList.remove('fa-pause');
      document.getElementById('playIcon')?.classList.add('fa-play');
    } else if (control.paused) {
      control.play();
      document.getElementById('playIcon')?.classList.remove('fa-play');
      document.getElementById('playIcon')?.classList.add('fa-pause');
    }
  };

  return (
    <Container>
      <Mask />
      <ContainerDeezer>
        <Deezer>Ouvir no Deezer</Deezer>
      </ContainerDeezer>

      <ContainerPlayer>
        <Title>Demons</Title>
        <PlayIcon id="playIcon" onClick={controlsSong} />
      </ContainerPlayer>
    </Container>
  );
};

export default Header;
