import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import '../less/main.less';
import store from './store';
import App from  './components/App.jsx';

function CoolRouter() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

ReactDOM.render(
  <CoolRouter />,
  document.getElementById('root')
);
