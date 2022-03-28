import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Layout from './components/Layout.js';
ReactDOM.render(
  
  <Layout>
    <App />
    </Layout>,
  document.getElementById('root')
);

