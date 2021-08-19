import styled from 'styled-components';

type FavIconProps = {
  fav: boolean;
};

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
})<FavIconProps>`
  color: ${(props) =>
    props.fav ? props.theme.colors.secondary : props.theme.colors.subtitle};
`;

export const Time = styled.p`
  margin-left: 16px;
  color: ${(props) => props.theme.colors.title};
  font-size: 12px;
`;
