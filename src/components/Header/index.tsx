import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch, RootState } from '../../store';

import {
  Container,
  ContainerDeezer,
  Deezer,
  Mask,
  ContainerPlayer,
  Title,
  PlayerIcon,
} from './styles';

type HeaderProps = {
  header: RootState;
  dispatch: AppDispatch;
};

export const togglePlayer = (player: boolean) => {
  return {
    type: 'TOGGLE_PLAYER',
    player,
  };
};

const Header: React.FC<any> = ({ header, dispatch }: HeaderProps) => {
  let visible = header.track.currentTrack.name;
  const controlPlayer = () => {
    let control = document.getElementById('audioPlayer') as HTMLAudioElement;

    if (!control.paused && !control.ended) {
      control.pause();
      dispatch(togglePlayer(false));
    } else if (control.paused) {
      control.play();
      dispatch(togglePlayer(true));
    }
  };

  return (
    <Container>
      <Mask background={header.track.currentTrack.cover} />

      <ContainerDeezer>
        {visible && (
          <Deezer href={header.track.currentTrack.link}>Ouvir no Deezer</Deezer>
        )}
      </ContainerDeezer>

      <ContainerPlayer>
        <Title>{header.track.currentTrack.name}</Title>

        {visible && (
          <PlayerIcon onClick={controlPlayer} icon={header.track.player} />
        )}
      </ContainerPlayer>
    </Container>
  );
};

export default connect((state) => ({ header: state }))(Header);
