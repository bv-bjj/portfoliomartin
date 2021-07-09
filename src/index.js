import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Navbar />
    </HashRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
