import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddPost from './Components/AddPost/AddPost'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>  
  ,document.getElementById('root')
);

