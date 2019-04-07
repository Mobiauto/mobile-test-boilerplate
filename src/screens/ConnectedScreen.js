import React from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from '../stores/index.js'

class ConnectedScreen extends React.Component {
  render() {
    const { uiStore } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the "ConnectedScreen"</Text>
        <Text>{JSON.stringify(uiStore, null, 2)}</Text>
        <Button
          title="Update uiStore"
          onPress={() => {
            uiStore.updateSomeData('anotherKey', `anotherValue-${Date.now()}`)
          }}
        />
      </View>
    )
  }
}

export default connect(
  ConnectedScreen,
  ['uiStore'],
)
