import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import Dashboard from './src/screens/Dashboard';

const App: React.FC  = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
  )
}

export default App 