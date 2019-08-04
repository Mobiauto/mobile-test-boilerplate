import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import colors from '../constants/colors'

const FilterComponent = ({ select, setSelected, actPress }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity 
        disabled={actPress}
        onPress={() => setSelected('caminhoes')} 
        style={[select === 'caminhoes' ? styles.opSelect : styles.opWrapper ]}
      >
        <Text style={[select === 'caminhoes' ? styles.txtSelect : styles.txtOp]}>Caminhões</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={actPress}
        onPress={() => setSelected('carros')}
        style={[select === 'carros' ? styles.opSelect : styles.opWrapper ]}
      >
        <Text style={[select === 'carros' ? styles.txtSelect : styles.txtOp]}>Carros</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        disabled={actPress}
        onPress={() => setSelected('motos')}
        style={[select === 'motos' ? styles.opSelect : styles.opWrapper ]}
      >
        <Text style={[select === 'motos' ? styles.txtSelect : styles.txtOp]}>Motos</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  wrapper: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtOp: {
    color: colors.basic.white,
    fontWeight: 'bold',
    fontSize: 18
  },
  txtSelect: {
    color: colors.purple.dark,
    fontWeight: 'bold',
    fontSize: 18
  },
  opWrapper: {
    height: 40,
    width: '30%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.purple.dark
  },
  opSelect: {
    borderWidth: 1,
    borderColor: colors.purple.dark,
    height: 40,
    width: '30%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }
}

export default FilterComponent
