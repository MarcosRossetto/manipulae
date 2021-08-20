import React from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <GlobalStyle />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
