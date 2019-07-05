import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "../../stores/index.js";

import Loading from "../../components/loading";
import ErrorFeedback from "../../components/ErrorFeedback";
import Title from "../../components/Title";

import {
  Container,
  ModelosList,
  ModeloButton,
  ModeloButtonText
} from "./styles";

class Anos extends Component {
  static navigationOptions = {
    headerTitle: "Escolha o ano"
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      state: PropTypes.shape({
        params: PropTypes.shape({
          modelo: PropTypes.shape({
            codigo: PropTypes.number,
            nome: PropTypes.string
          })
        })
      })
    }).isRequired,
    Transport: PropTypes.shape({
      loadModels: PropTypes.func,
      years: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({
          codigo: PropTypes.string,
          nome: PropTypes.string
        })),
        loading: PropTypes.bool,
        error: PropTypes.bool
      })
    }).isRequired
  };

  componentDidMount() {
    const { Transport, navigation } = this.props;

    const modelo = navigation.getParam("modelo");

    Transport.loadYears(modelo.codigo);
  }

  renderItem = ({ item: ano }) => {
    const { navigation } = this.props;

    return (
      <ModeloButton onPress={() => navigation.navigate("Detalhes", { ano })}>
        <ModeloButtonText>{ano.nome}</ModeloButtonText>
      </ModeloButton>
    );
  };

  renderList = () => {
    const { Transport, navigation } = this.props;
    const modelo = navigation.getParam("modelo");

    return (
      <ModelosList
        data={Transport.years.data}
        keyExtractor={item => String(item.codigo)}
        renderItem={this.renderItem}
        ListHeaderComponent={<Title>{`Anos do modelo ${modelo.nome}:`}</Title>}
      />
    );
  };

  render() {
    const { Transport } = this.props;

    if (Transport.years.loading) return <Loading />;

    return (
      <Container>
        {Transport.years.error ? (
          <ErrorFeedback
            message="Falha no carregamento das informações"
            buttonText="Tentar novamente"
            onButtonClick={() => Transport.loadYears(Transport.years.active)}
          />
        ) : (
          this.renderList()
        )}
      </Container>
    );
  }
}

export default connect(
  Anos,
  ["Transport"]
);
