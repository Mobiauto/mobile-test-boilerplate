import React from 'react'
import { Platform } from 'react-native'

import { connect } from '../stores/index.js'
import { Container, Content, vehicles } from '../components'
import colors from '../constants/colors'

class VehicleScreen extends React.Component {
  static navigationOptions = {
    title: 'Detalhe do veículo'
  }

  render() {
    const { uiStore } = this.props
    return (
      <Container
        style={{ flex: 0, backgroundColor: colors.basic.white }} 
        top={Platform.OS === 'android' ? 20 : 0}
      >
        <Content>
            <vehicles.VehicleDetail data={uiStore.vehicle} />
        </Content>
      </Container>
    )
  }
}

export default connect(
  VehicleScreen,
  ['uiStore'],
)
