import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 10vh;
  padding: 8px;
  margin-bottom: 16px;
  justify-content: space-between;
`;

export const ThumbContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 16px;
    height: 60px;
    width: 60px;
    object-fit: cover;
    margin-right: 8px;
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 12px;
`;

export const Subtitle = styled.div`
  font-size: 10px;
  color: ${(props) => props.theme.colors.subtitle};
`;

export const FavIcon = styled.i.attrs({
  className: 'fas fa-heart',
})`
  color: ${(props) => props.theme.colors.secondary};
  margin-right: 16px;
`;

export const Time = styled.p`
  color: ${(props) => props.theme.colors.title};
  font-size: 12px;
`;
