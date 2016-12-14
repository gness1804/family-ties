import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Application from './components/Application.jsx';

require('./styles.scss');

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, [], enhancers);

render((
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={Application}>

    </Route>
  </Router>
</Provider>
          ), document.getElementById('application'));
