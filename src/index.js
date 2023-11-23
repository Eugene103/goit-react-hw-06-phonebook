import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/App/GlobalStyle';
import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={{}} >
      <App/>
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>
);
