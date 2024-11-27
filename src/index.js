import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/Client/Styles/Index.css'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
     <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
