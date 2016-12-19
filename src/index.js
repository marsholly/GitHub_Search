import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Navbar from './components/Navbar';
import TopRepoBoard from './components/TopRepoBoard';
import TopUserBoard from './components/TopUserBoard';

render(
  <Router history = {browserHistory}>
    <Route path = '/GitHub_Search/' component = {Navbar}>
      <Route path = 'topRepo' component = {TopRepoBoard} />
      <Route path = 'topUser' component = {TopUserBoard} />
    </Route>
  </Router>,
  document.getElementById('root')
)
