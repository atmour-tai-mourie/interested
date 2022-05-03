import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'
import { Grommet } from 'grommet'

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
        <App />
      </Grommet>
    </Provider>,
    document.getElementById('app')
  )
})
