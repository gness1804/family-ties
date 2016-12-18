import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Application from './components/Application.jsx';
import Tree from './components/Tree';
import TreeContainer from './containers/TreeContainer';
import people from './reducers/people';

require('./styles.scss');

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(people, [], enhancers);

render((
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={Application}>
      <Route path="/tree" component={TreeContainer} />
    </Route>
  </Router>
</Provider>
          ), document.getElementById('application'));
