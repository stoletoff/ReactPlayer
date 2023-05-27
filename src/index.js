import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import './index.css';
import { Example1 } from 'components/Example1';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Example1 />
  </React.StrictMode>
);
