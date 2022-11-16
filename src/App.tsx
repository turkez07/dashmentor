import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';

import defaultTheme from './styles/themes/defaultTheme';

const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
