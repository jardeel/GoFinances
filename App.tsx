import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium, 
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import Dashboard from './src/screens/Dashboard';

const App: React.FC  = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Dashboard/>
    </ThemeProvider>
  )
}

export default App 