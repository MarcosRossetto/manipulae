import React from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <GlobalStyle />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
