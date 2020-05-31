import React, { FunctionComponent } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './../pages/Dashboard'
import Repositories from './../pages/Repositories'

const Routes: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repositories} />
    </Switch>
  </BrowserRouter>
)

export default Routes
