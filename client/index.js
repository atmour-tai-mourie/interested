import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'
import { Grommet } from 'grommet'
import { BrowserRouter as Router } from 'react-router-dom'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Grommet theme={theme}>
        <Router>
          <App />
        </Router>
      </Grommet>
    </Provider>,
    document.getElementById('app')
  )
})
