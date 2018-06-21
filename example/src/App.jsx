import React from 'react'
import {
  BrowserRouter,
} from 'react-router-dom'

/* eslint import/no-extraneous-dependencies: "off" */
import { hot } from 'react-hot-loader'

import Dashboard from './Dashboard'

export default hot(module)(() => (
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>
));
