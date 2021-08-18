import React from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Search from './components/Search';
import Menu from './components/Menu';
import List from './components/List';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Search />
        <List />
        <Menu />
      </div>
    </ThemeProvider>
  );
}

export default App;
