import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter} from "react-router-dom";
import Layout from './components/Layout.js';
ReactDOM.render(
  <HashRouter>
    <Layout>
      <App />
    </Layout>
  </HashRouter>,
  document.getElementById('root')
);

