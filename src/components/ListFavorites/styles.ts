import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (min-width: 1024px) {
    max-width: 80vw;
    margin: 0 auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
