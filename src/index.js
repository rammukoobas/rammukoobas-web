import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Components/Homepage/Homepage';
import reportWebVitals from './reportWebVitals';

import 'semantic-ui-css/semantic.min.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
