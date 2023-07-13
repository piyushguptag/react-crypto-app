import {  ChakraProvider, theme} from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
  <ChakraProvider theme={theme}>
  <Provider store={store}>
    <App />
  </Provider> 
  </ChakraProvider>
  </StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`;

