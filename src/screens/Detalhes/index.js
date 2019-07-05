import React, { Component } from "react";

import PropTypes from "prop-types";

import api from '../../services/api';

import { connect } from "../../stores/index.js";

import Loading from "../../components/loading";
import ErrorFeedback from "../../components/ErrorFeedback";
import Title from "../../components/Title";

import {
  Container, Info, InfoLabel, InfoValue
} from "./styles";

class Detalhes extends Component {
  static navigationOptions = {
    headerTitle: "Detalhes do veículo"
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      state: PropTypes.shape({
        params: PropTypes.shape({
          ano: PropTypes.shape({
            codigo: PropTypes.string,
            nome: PropTypes.string
          })
        })
      })
    }).isRequired,
    Transport: PropTypes.shape({
      activeTransport: PropTypes.string,
      marks: PropTypes.shape({
        active: PropTypes.string,
      }),
      models: PropTypes.shape({
        active: PropTypes.number,
      })
    }).isRequired
  };

  state = {
    data: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.loadDetails()
  }

  loadDetails = async () => {
    const { Transport, navigation } = this.props;

    const ano = navigation.getParam("ano");

    let link = `/${Transport.activeTransport}/marcas/${Transport.marks.active}`;
    link += `/modelos/${Transport.models.active}/anos/${ano.codigo}`;
    console.log(link);

    try {
      const { data } = await api.get(link);

      this.setState({ data, loading: false })
    } catch(err) {
      this.setState({ error: true, loading: false })
    }
  };

  render() {
    const { loading, data, error } = this.state;

    if (loading) return <Loading />;

    if (error) return <ErrorFeedback
      message="Falha no carregamento das informações"
      buttonText="Tentar novamente"
      onButtonClick={() => this.loadDetails()}
    />;

    return (
      <Container>
        <Info>
          <InfoLabel>Marca:</InfoLabel>
          <InfoValue>{data.Marca}</InfoValue>
        </Info>
        <Info>
          <InfoLabel>Modelo:</InfoLabel>
          <InfoValue>{data.Modelo}</InfoValue>
        </Info>
        <Info>
          <InfoLabel>Ano:</InfoLabel>
          <InfoValue>{data.AnoModelo}</InfoValue>
        </Info>
        <Info>
          <InfoLabel>Valor:</InfoLabel>
          <InfoValue>{data.Valor}</InfoValue>
        </Info>
        <Info>
          <InfoLabel>Combustivel:</InfoLabel>
          <InfoValue>{data.Combustivel}</InfoValue>
        </Info>
        <Info>
          <InfoLabel>Mês de referência</InfoLabel>
          <InfoValue>{data.MesReferencia}</InfoValue>
        </Info>
      </Container>
    );
  }
}

export default connect(
  Detalhes,
  ["Transport"]
);
