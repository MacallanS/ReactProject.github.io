import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import MainRouter from './app/routes';
import Navbar from './components/Navbar';
import GlobalStyles from './style/GlobalStyle';
import LoadingScreen from './components/LoadingScreen';

const lightTheme = {
  colors: {
    primary: '#1e90ff',
    secondary: '#8eff72',
    tertiary: '#FF5733',
    background: '#FFF',
    text: '#000',
  },
};

const darkTheme = {
  colors: {
    primary: '#FF5733',
    secondary: '#451E92',
    tertiary: '#0F4C75',
    background: '#000',
    text: '#FFF',
  },
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  const changeTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setCurrentTheme(newTheme);
  };

  const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={{ ...theme, currentTheme }}>
      <GlobalStyles />
      <Navbar toggleTheme={changeTheme} theme={theme} />
      {loading ? (
        <LoadingScreen />
      ) : (
        <MainRouter />
      )}
    </ThemeProvider>
  );
};

export default App;
