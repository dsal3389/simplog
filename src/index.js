import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UploadRouteComponent from './routes/upload/upload.route';
import ViewRouteComponent   from './routes/view/view.route';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App/> }>
        <Route path="/" element={ <UploadRouteComponent/> } />
        <Route path="/view" element={ <ViewRouteComponent /> } />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
