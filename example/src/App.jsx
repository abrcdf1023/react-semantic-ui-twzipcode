import React from 'react'
import {
  BrowserRouter,
} from 'react-router-dom'

/* eslint import/no-extraneous-dependencies: "off" */
import { hot } from 'react-hot-loader'

import Home from './Home'

export default hot(module)(() => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
));
