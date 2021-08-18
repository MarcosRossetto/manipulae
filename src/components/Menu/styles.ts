import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  padding-top: 8px;
  padding-bottom: 8px;
  border-top: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.title};
  font-size: 8px;
`;

export const Item = styled.h1``;
