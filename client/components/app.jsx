import React from 'react'
import {Route} from 'react-router-dom'

import form from './form'
import map from './map'

const App = ({children}) => (
  <div className="container">
    <Route exact path='/' component={form} />
    <Route path='/map' component={map} />
  </div>
)

export default App