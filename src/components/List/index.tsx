import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroll-component';
import ListItem, { Track } from '../ListItem';

import { Container, SearchContainer, SearchInput } from './styles';

import { secondToMinute } from '../../utils/secondsToMinutes';

import api from '../../services/api';

const addTracks = (tracks: Track[]) => {
  return {
    type: 'ADD_TRACKS',
    tracks,
  };
};

const List: React.FC<any> = ({ dispatch }: any) => {
  const [track, setTrack] = useState<Track[]>([]);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('');

  const formatData = ({ data }: any) => {
    const formattedResult = data.map((data: Track) => {
      return {
        ...data,
        duration: secondToMinute(data.duration),
      };
    });

    setTrack([...track, ...formattedResult]);

    setIndex(index + 25);

    dispatch(addTracks(track));
  };

  async function searchTrack() {
    try {
      const response = await api.get(
        `search?q=${search.replace(/ /g, '')}&index=${index}`
      );

      formatData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getTrack() {
    try {
      const response = await api.get(`chart/0/tracks?index=${index}`);

      formatData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTrack();
    // eslint-disable-next-line
  }, []);

  return (
    <Container id="scrollableDiv">
      <SearchContainer>
        <SearchInput
          onKeyUp={(e: any) => {
            setIndex(0);
            setTrack([]);
            setSearch(e.target.value);
            searchTrack();
          }}
        />
        <i className="fas fa-search"></i>
      </SearchContainer>

      <InfiniteScroll
        dataLength={track.length - 5}
        next={() => {
          if (search === '') {
            getTrack();
          } else {
            searchTrack();
          }
        }}
        hasMore={true}
        loader={<p></p>}
        scrollableTarget="scrollableDiv"
      >
        {track.map((item: Track, index: number) => {
          return <ListItem key={index} track={item} />;
        })}
      </InfiniteScroll>
    </Container>
  );
};

export default connect((state) => ({ tracks: state }))(List);
