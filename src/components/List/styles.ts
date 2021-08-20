import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  height: 70vh;
  overflow: scroll;
`;

export const SearchContainer = styled.div``;

export const SearchInput = styled.input.attrs({
  placeholder: 'Pesquise por músicas ou álbuns',
})`
  background: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.title};
  width: 80vw;
  padding: 4px;
  border-radius: 16px;
  border: none;
  outline: none;
  margin: 8px;

  ::placeholder {
    color: ${(props) => props.theme.colors.title};
  }
`;
