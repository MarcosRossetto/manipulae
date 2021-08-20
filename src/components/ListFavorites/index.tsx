import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ListItem, { Track } from '../ListItem';

import { Container } from './styles';

const List: React.FC<any> = ({ tracks }: any) => {
  const [track, setTrack] = useState<Track[]>([]);

  async function getFavorites() {
    let fav = tracks.track.favorites;
    setTrack(fav);
  }

  useEffect(() => {
    getFavorites();
    // eslint-disable-next-line
  }, []);

  return (
    <Container id="scrollableDiv">
      {track.length > 0 ? (
        track.map((item: Track) => {
          return <ListItem key={item.id} track={item} />;
        })
      ) : (
        <h1>Nenhum favorito</h1>
      )}
    </Container>
  );
};

export default connect((state) => ({ tracks: state }))(List);
