import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './ScrollToTop'; 

function AppWrapper() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;