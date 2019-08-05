import React from 'react'
import { View, Text } from 'react-native'
import colors from '../constants/colors';

const VehicleDetail = ({ data }) => (
  <View style={styles.wrapper}>
    <Text style={styles.txtTitle}>Valor:{'\t'}<Text style={styles.txtItem}>{data.Valor}</Text></Text>
    <Text style={styles.txtTitle}>Marca:{'\t'}<Text style={styles.txtItem}>{data.Marca}</Text></Text>
    <Text style={styles.txtTitle}>Modelo:{'\t'}<Text style={styles.txtItem}>{data.Modelo}</Text></Text>
    <Text style={styles.txtTitle}>Ano Modelo:{'\t'}<Text style={styles.txtItem}>{data.AnoModelo}</Text></Text>
    <Text style={styles.txtTitle}>Combustível:{'\t'}<Text style={styles.txtItem}>{data.Combustivel}</Text></Text>
    <Text style={styles.txtTitle}>Código Fipe:{'\t'}<Text style={styles.txtItem}>{data.CodigoFipe}</Text></Text>
    <Text style={styles.txtTitle}>Mês Referência:{'\t'}<Text style={styles.txtItem}>{data.MesReferencia}</Text></Text>
    <Text style={styles.txtTitle}>Tipo Veículo:{'\t'}<Text style={styles.txtItem}>{data.TipoVeiculo}</Text></Text>
    <Text style={styles.txtTitle}>Sigla Combutível:{'\t'}<Text style={styles.txtItem}>{data.SiglaCombustivel}</Text></Text>
  </View>
)

const styles = {
  wrapper: {
    margin: 16,
    padding: 16,
    borderWidth: 1,
    backgroundColor: colors.gray.lighter,
    borderColor: colors.purple.dark,
    elevation: 3
  },
  txtTitle: {
    marginRight: 20,
    color: colors.purple.dark,
    fontSize: 18,
    fontWeight: 'bold'
  },
  txtItem: {
    color: colors.basic.black,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18,
  }
}

export default VehicleDetail
