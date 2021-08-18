import React from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
