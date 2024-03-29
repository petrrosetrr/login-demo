import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import 'the-new-css-reset/css/reset.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);