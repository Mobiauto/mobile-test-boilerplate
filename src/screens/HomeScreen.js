import React from 'react'
import { View, Text, Button } from 'react-native'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the "Home Screen"</Text>
        <Button title="Go to Connected screen" onPress={() => this.props.navigation.navigate('Connected')} />
      </View>
    )
  }
}

export default HomeScreen
