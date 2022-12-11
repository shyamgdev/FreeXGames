import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalState from './context/GlobalState';
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalState>
      <BrowserRouter>
      <ScrollToTop />
        <App />
      </BrowserRouter>
    </GlobalState>
  </React.StrictMode>
);