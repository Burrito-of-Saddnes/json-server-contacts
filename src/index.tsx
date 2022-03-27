import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { RootStore } from './stores/RootStore';

import App from './components/App';

import "./css/App.css"
import './css/index.css';

declare global {
  interface Window { rootState: RootStore }
}

const ROOT_STORE_INSTANCE = window.rootState = new RootStore()

ReactDOM.render(
  <Provider {...ROOT_STORE_INSTANCE}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();