import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import ConnectedScreen from './screens/ConnectedScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Connected: {
    screen: ConnectedScreen,
  },
})

export default createAppContainer(AppNavigator)
