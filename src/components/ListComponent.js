import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import colors from '../constants/colors';
import icons from  '../constants/icons';

const ListComponet = ({ data, pressBrand }) => (
  data.map((it, ix) => (
    <TouchableOpacity 
      onPress={() => pressBrand(it.codigo)} 
      style={styles.wrapper} key={ix}
    >
      <Text style={styles.txt}>{it.nome}</Text>
      <Image source={icons['right']} />
    </TouchableOpacity>
  ))
)

const styles = {
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.purple.dark
  },
  txt:{
    fontWeight: 'bold',
    fontSize: 18
  },
  ic: {
    width: 12,
    height: 12
  }
}

export default ListComponet;
