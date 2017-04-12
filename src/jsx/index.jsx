import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../less/main.less';
import store from './store.jsx';
import App from  './components/App.jsx';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// (also see: http://www.material-ui.com/#/get-started/installation)
injectTapEventPlugin();

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
