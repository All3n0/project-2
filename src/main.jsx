import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios';
 
axios.interceptors.request.use(function (config) {
  config.headers['X-Binarybox-Api-Key'] = process.env.REACT_APP_API_KEY;
  return config;
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
