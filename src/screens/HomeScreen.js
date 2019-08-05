import React from 'react'
import { View, Text, Platform, ActivityIndicator } from 'react-native'

import api from '../service'
import { connect } from '../stores/index.js'
import { FilterComponet, Container, Content, vehicles, messages } from '../components'
import colors from '../constants/colors'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  UNSAFE_componentWillMount() {
    const { uiStore } = this.props
    this._getBrands(uiStore.filters.type)
  }

  _getBrands = async (search) => {
    const { uiStore } = this.props
    uiStore.setIsFetching(true);
    try {
      const res = await api.vehicles.getBrands(search)
      if (res) {
        uiStore.updateList(res.data)
        uiStore.setIsFetching(false)
      }
    } catch(err) {
      uiStore.setIsFetching(false)
      alert(messages.erroRequeste)
    }
  }

  _getModels = async (search) => {
    const { uiStore } = this.props
    uiStore.setIsFetching(true);
    try {
      const res = await api.vehicles.getModels(uiStore.filters.type,search)
      if (res) {
        uiStore.updateModelList(res.data)
        this.props.navigation.navigate('Model')
        uiStore.setIsFetching(false)
      }
    } catch(err) {
      uiStore.setIsFetching(false)
      alert(messages.erroRequeste)
    }
  }

  render() {
    const { uiStore } = this.props
    return (
      <Container
        style={{ flex: 0, backgroundColor: colors.basic.white }} 
        top={Platform.OS === 'android' ? 10 : 0}
      >
        <Text style={{ padding: 14, color: colors.purple.dark, fontSize: 18, textAlign: 'center', alignSelf: 'center' }}>Indique abaixo o tipo de veículo desejado</Text>
        <FilterComponet
          select={uiStore.filters.type}
          actPress={uiStore.isFetching}
          setSelected={value => {
            uiStore.updateFilter({ type: value })
            this._getBrands(value)
          }}
        />
        
        <View style={{ flex: 1 }}>
          {uiStore.isFetching ?
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <ActivityIndicator style={{ alignSelf: 'center' }} size='large' color={colors.purple.dark} />
              <Text style={{ color: colors.purple.dark, fontSize: 14 }}>aguarde...</Text>
            </View> :
            <View style={{ flex: 1 }}>
              <Text style={{ padding: 16, color: colors.purple.dark, fontSize: 18, textAlign: 'center', alignSelf: 'center' }}>Selecione uma marca desejada</Text>
              <Content>
                <vehicles.ListComponent
                  pressBrand={value => {
                    this._getModels(value)
                    uiStore.updateFilter({ brandCode: value })
                  }} 
                  data={uiStore.brands} 
                />
              </Content>
            </View>
          }
        </View>
      </Container>
    )
  }
}

export default connect(
  HomeScreen,
  ['uiStore'],
)
