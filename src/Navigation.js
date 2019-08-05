import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import ModelScreen from './screens/ModelScreen'
import ConnectedScreen from './screens/ConnectedScreen'
import VehicleScreen from './screens/VehicleScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Connected: {
    screen: ConnectedScreen,
  },
  Model: {
    screen: ModelScreen
  },
  Vehicle: {
    screen: VehicleScreen
  }
})

export default createAppContainer(AppNavigator)
