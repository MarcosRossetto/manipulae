import React, { useState } from 'react';

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
  album: {
    title: string;
    cover_small: string;
  };
};

type TrackItemProps = {
  track: Track;
};

const playSong = (song: string) => {
  let player = document.getElementById('audioPlayer') as any;
  player?.setAttribute('src', song);
  document.getElementById('playIcon')?.classList.remove('fa-play');
  document.getElementById('playIcon')?.classList.add('fa-pause');
};

const ListItem: React.FC<TrackItemProps> = ({ track }: TrackItemProps) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <Container>
      <ThumbContainer>
        <img
          id="imageSong"
          src={track.album.cover_small}
          alt=""
          onClick={() => {
            playSong(track.preview);
          }}
        />

        <div>
          <Title>{track.title}</Title>
          <Subtitle>{track.album.title}</Subtitle>
        </div>
      </ThumbContainer>

      <LikeContainer>
        <FavIcon
          fav={favorite}
          onClick={() => {
            setFavorite(!favorite);
            console.log(track.id);
          }}
        />

        <Time>{track.duration}</Time>
        <audio id="audioPlayer" autoPlay></audio>
      </LikeContainer>
    </Container>
  );
};

export default ListItem;
