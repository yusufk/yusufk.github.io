import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.css';
import 'glightbox/dist/css/glightbox.css';
import 'remixicon/fonts/remixicon.css';
import 'swiper/css/bundle';
import './index.css';
import App from './App';
import Navtools from './lib/navtools.js';
import pkg from 'react-ga4';
const ReactGA = pkg.default || pkg;

ReactGA.initialize('G-J0X6EB8JL4');

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Navtools();
