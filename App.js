import React from 'react'
import { Provider } from 'mobx-react'

import store from './src/stores'
import Navigation from './src/Navigation'

export default class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Navigation />
      </Provider>
    )
  }
}
