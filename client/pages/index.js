import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Homepage from './Homepage'
import Travel from './Travel'
import About from './About'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const App = () => (
  <Router history={ history }>

  <div>
    <Navbar />
    <Switch>
      <Route path="/about" component={ About } />
      <Route path="/travel" component={ Travel } />
      <Route path="/" component={ Homepage } />
    </Switch>
  </div>
  </Router>
)

export default App;
