import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 .App {
   display: flex;
   flex-direction: column;
   height: 100vh;
 }

 body {
   background: ${(props) => props.theme.colors.background};
   color: ${(props) => props.theme.colors.title};
   font-size: 14px;
   font-family: 'K2D';
 }
`;
