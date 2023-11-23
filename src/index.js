import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/App/GlobalStyle';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={{}} >
      <App/>
      <GlobalStyle/>
      </ThemeProvider>
      </Provider>
  </React.StrictMode>
);
