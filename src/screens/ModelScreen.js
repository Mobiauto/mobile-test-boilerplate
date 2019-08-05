import React from 'react'
import { View, Text, Platform, ActivityIndicator, Modal } from 'react-native'

import api from '../service'
import { connect } from '../stores/index.js'
import { Container, Content, vehicles, messages } from '../components'
import colors from '../constants/colors'

class ModelScreen extends React.Component {
  static navigationOptions = {
    title: 'Selecionar Modelo'
  }

  state = {
    show: false
  }

  _setShow = state => {
    this.setState({ show: state })
  }

  _handleModal = () => {
    const { uiStore } = this.props
    return (
      <Modal 
        animationType="slide"
        transparent
        visible={this.state.show}
        onRequestClose={() => {
          this._setShow(false)
        }}
      >
        <View style={styles.contentModal}>
            <Content>
              <Text style={styles.txtTitle}>Selecione o ano do veículo desejado para ver detalhes</Text>
              <vehicles.ListComponent
                pressBrand={value => { 
                  uiStore.updateFilter({ yearCode: value })
                  this._setShow(false)
                  this._getVehicle(value)
                }}
                data={uiStore.yearsModel} 
              />
            </Content>
            <Text onPress={() => this._setShow(false)} style={styles.txtCancel}>CANCELAR</Text>
        </View>
      </Modal>
    )   
  }

  _getYearsModel = async (search) => {
    const { uiStore } = this.props
    uiStore.setIsFetching(true);
    try {
      const res = await api.vehicles.getModelsYears(uiStore.filters.type, uiStore.filters.brandCode, search)
      if (res) {
        uiStore.updateYearsModelList(res.data)
        uiStore.setIsFetching(false)
        this._setShow(true)
      }
    } catch(err) {
      uiStore.setIsFetching(false)
      alert(messages.erroRequeste)
    }
  }

  _getVehicle = async (search) => {
    const { uiStore } = this.props
    uiStore.setIsFetching(true);
    try {
      const res = await api.vehicles.getModelsYearsCode(uiStore.filters.type, uiStore.filters.brandCode, uiStore.filters.modelCode, search)
      if (res) {
        uiStore.updateVehicle(res.data)
        uiStore.setIsFetching(false)
        this.props.navigation.navigate('Vehicle')
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
        top={Platform.OS === 'android' ? 20 : 0}
      >
        {this.state.show && this._handleModal()}
        <Content>
        {uiStore.isFetching ?
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator style={{ alignSelf: 'center' }} size='large' color={colors.purple.dark} />
          </View> :
          <vehicles.ListComponent
            pressBrand={value => { 
                this._getYearsModel(value)
                uiStore.updateFilter({ modelCode: value })
            }}
            data={uiStore.models.modelos} 
          />
        }
        </Content>
      </Container>
    )
  }
}

const styles = {
  contentModal: {
    alignSelf: 'center', 
    width: '70%', 
    height: 280, 
    backgroundColor: colors.purple.light
  },
  txtTitle: {
    textAlign: 'center', 
    color: colors.basic.black,
    fontWeight: 'bold',
  },
  txtCancel: {
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
    color: colors.basic.black
  }
}

export default connect(
  ModelScreen,
  ['uiStore'],
)
