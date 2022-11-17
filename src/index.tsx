import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppThemeProvider } from './contexts/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
