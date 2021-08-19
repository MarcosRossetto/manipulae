import React, { useEffect, useState } from 'react';
import ListItem, { Track } from '../ListItem';
import api from '../../services/api';

import { Container } from './styles';
import { secondToMinute } from '../../utils/secondsToMinutes';
import InfiniteScroll from 'react-infinite-scroll-component';
import Search from '../Search';

const List: React.FC = () => {
  const [track, setTrack] = useState<Track[]>([]);
  const [index, setIndex] = useState(0);
  let limit = 100;

  async function getTrack() {
    try {
      const response = await api.get(
        `chart/0/tracks?index=${index}&limit=${limit}`
      );

      const formattedResult = await response.data.data.map((data: any) => {
        return {
          ...data,
          duration: secondToMinute(data.duration),
        };
      });

      setTrack([...track, ...formattedResult]);

      if (index === 0) return setIndex(index + limit);
      if (index > 0) return setIndex(index * 2);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTrack();
  }, []);

  return (
    <Container id="scrollableDiv">
      <Search />
      <InfiniteScroll
        dataLength={track.length - 5} //This is important field to render the next data
        next={getTrack}
        hasMore={true}
        loader={<p></p>}
        endMessage={<p></p>}
        scrollableTarget="scrollableDiv"
      >
        {track.map((item: Track) => {
          return <ListItem key={item.id} track={item} />;
        })}
      </InfiniteScroll>
    </Container>
  );
};

export default List;
