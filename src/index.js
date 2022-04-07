import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.css';
import 'glightbox/dist/css/glightbox.css';
import 'remixicon/fonts/remixicon.css';
import 'swiper/css/bundle';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navtools from './lib/navtools.js';
import ReactGA from 'react-ga';

ReactGA.initialize('G-J0X6EB8JL4');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Navtools();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
