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

class Modelos extends Component {
  static navigationOptions = {
    headerTitle: "Escolha um modelo"
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      state: PropTypes.shape({
        params: PropTypes.shape({
          marca: PropTypes.shape({
            codigo: PropTypes.string,
            nome: PropTypes.string
          })
        })
      })
    }).isRequired,
    Transport: PropTypes.shape({
      loadModels: PropTypes.func,
      models: PropTypes.shape({
        data: PropTypes.shape({
          modelos: PropTypes.arrayOf(PropTypes.shape({
            codigo: PropTypes.number,
            nome: PropTypes.string
          }))
        }),
        loading: PropTypes.bool,
        error: PropTypes.bool
      })
    }).isRequired
  };

  componentDidMount() {
    const { Transport, navigation } = this.props;

    const marca = navigation.getParam("marca");

    Transport.loadModels(marca.codigo);
  }

  renderItem = ({ item: modelo }) => {
    const { navigation } = this.props;

    return (
      <ModeloButton onPress={() => navigation.navigate("Anos", { modelo })}>
        <ModeloButtonText>{modelo.nome}</ModeloButtonText>
      </ModeloButton>
    );
  };

  renderList = () => {
    const { Transport, navigation } = this.props;
    const marca = navigation.getParam("marca");

    return (
      <ModelosList
        data={Transport.models.data.modelos}
        keyExtractor={item => String(item.codigo)}
        renderItem={this.renderItem}
        ListHeaderComponent={<Title>{`Modelos da marca ${marca.nome}:`}</Title>}
      />
    );
  };

  render() {
    const { Transport } = this.props;

    if (Transport.models.loading) return <Loading />;

    return (
      <Container>
        {Transport.models.error ? (
          <ErrorFeedback
            message="Falha no carregamento das informações"
            buttonText="Tentar novamente"
            onButtonClick={() => Transport.loadModels(Transport.models.active)}
          />
        ) : (
          this.renderList()
        )}
      </Container>
    );
  }
}

export default connect(
  Modelos,
  ["Transport"]
);
