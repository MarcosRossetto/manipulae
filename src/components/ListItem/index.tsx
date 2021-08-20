import React, { useState } from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from '../../store';

import { togglePlayer } from '../Header';

import {
  Container,
  LikeContainer,
  ThumbContainer,
  Title,
  Subtitle,
  FavIcon,
  Time,
} from './styles';

export type Track = {
  id: number;
  duration: number;
  title: string;
  preview: string;
  fav: boolean;
  link: string;
  album: {
    title: string;
    cover_small: string;
    cover_big: string;
  };
};

type ListItemProps = {
  track: Track;
  favorites: any;
  dispatch: AppDispatch;
};

const addFavorite = (favorite: Track, favoritesId: number) => {
  return {
    type: 'ADD_FAVORITE',
    favorite,
    favoritesId,
  };
};

const deleteFavorite = (favorite: Track, favoritesId: number) => {
  return {
    type: 'DELETE_FAVORITE',
    favorite,
    favoritesId,
  };
};

export const currentTrack = (cover: string, name: string, link: string) => {
  return {
    type: 'CURRENT_TRACK',
    currentTrack: { cover, name, link },
  };
};

const ListItem: React.FC<any> = ({
  track,
  favorites,
  dispatch,
}: ListItemProps) => {
  const [favorite, setFavorite] = useState(
    favorites.track.favoritesId.includes(track.id) ? true : false
  );

  const toggleFavorite = (favTrack: Track) => {
    if (favorites.track.favoritesId.includes(favTrack.id)) {
      setFavorite(!favorite);
      dispatch(deleteFavorite(track, track.id));
    } else {
      setFavorite(!favorite);
      dispatch(addFavorite(track, track.id));
    }
  };

  const playSong = (song: string) => {
    let player = document.getElementById('audioPlayer') as any;

    player?.setAttribute('src', song);

    dispatch(togglePlayer(true));
    dispatch(currentTrack(track.album.cover_big, track.title, track.link));
  };

  return (
    <Container>
      <ThumbContainer
        onClick={() => {
          playSong(track.preview);
        }}
      >
        <img id="imageSong" src={track.album.cover_small} alt={track.title} />

        <div>
          <Title>{track.title}</Title>
          <Subtitle>{track.album.title}</Subtitle>
        </div>
      </ThumbContainer>

      <LikeContainer>
        <FavIcon
          fav={favorite}
          onClick={() => {
            toggleFavorite(track);
          }}
        />
        <Time>{track.duration}</Time>
        <audio id="audioPlayer" autoPlay></audio>
      </LikeContainer>
    </Container>
  );
};

export default connect((state) => ({ favorites: state }))(ListItem);
