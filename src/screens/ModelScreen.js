import React from 'react'
import { View, Text, Platform, ActivityIndicator } from 'react-native'

import api from '../service'
import { connect } from '../stores/index.js'
import { Container, Content, vehicles } from '../components'
import colors from '../constants/colors'

class ModelScreen extends React.Component {
  static navigationOptions = {
    title: 'Selecionar Modelo'
  }

  state = {
    filter: ''
  }

  _getModels = async (search) => {
    const { uiStore } = this.props
    const { select } = this.state;
    uiStore.setIsFetching(true);
    try {
      const res = await api.vehicles.getModels(select,search)
      if (res) {
        alert('ok')
        uiStore.updateModelList(res.data)
        uiStore.setIsFetching(false)
      }
    } catch(err) {
      uiStore.setIsFetching(false)
      alert('Falha na busca, tente novamente mais tarde!')
    }
  }

  render() {
    const { uiStore } = this.props
    return (
      <Container
        style={{ flex: 0, backgroundColor: colors.basic.white }} 
        top={Platform.OS === 'android' ? 20 : 0}
      >
        <Content>
        {uiStore.isFetching ?
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator style={{ alignSelf: 'center' }} size='large' color={colors.purple.dark} />
          </View> :
          <vehicles.ListComponent
            pressBrand={value => {}}
            data={uiStore.models.modelos} 
          />
        }
        </Content>
      </Container>
    )
  }
}

export default connect(
  ModelScreen,
  ['uiStore'],
)
