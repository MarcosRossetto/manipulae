import styled from 'styled-components';

import { Link } from 'react-router-dom';

type ItemProps = {
  active: number;
  to: string;
};

export const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  width: 100vw;
  padding-top: 8px;
  padding-bottom: 8px;
  border-top: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.title};
  font-size: 8px;
`;

export const Item = styled(Link)<ItemProps>`
  font-size: 14px;
  font-family: 'K2D';
  font-weight: bold;
  text-decoration: none;
  color: ${(props) =>
    props.active === 1 ? props.theme.colors.white : props.theme.colors.title};
`;
