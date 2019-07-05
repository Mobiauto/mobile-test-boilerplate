import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "../../stores/index.js";

import Loading from "../../components/loading";
import ErrorFeedback from "../../components/ErrorFeedback";
import Title from "../../components/Title";

import { Container, MarcasList, MarcaButton, MarcaButtonText } from "./styles";

class Marcas extends Component {
  static navigationOptions = {
    headerTitle: "Escolha uma marca"
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      state: PropTypes.shape({
        params: PropTypes.shape({
          veiculo: PropTypes.shape({
            key: PropTypes.string,
            text: PropTypes.string
          }),
        })
      })
    }).isRequired,
    Transport: PropTypes.shape({
      loadMarks: PropTypes.func,
      marks: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({
          codigo: PropTypes.number,
          nome: PropTypes.string
        })),
        loading: PropTypes.bool,
        error: PropTypes.bool
      })
    }).isRequired
  };

  componentDidMount() {
    const { Transport, navigation } = this.props;

    const veiculo = navigation.getParam("veiculo");

    Transport.loadMarks(veiculo.key);
  }

  renderItem = ({ item: marca }) => {
    const { navigation } = this.props;

    return (
      <MarcaButton onPress={() => navigation.navigate("Modelos", { marca })}>
        <MarcaButtonText>{marca.nome}</MarcaButtonText>
      </MarcaButton>
    );
  };

  renderList = () => {
    const { Transport, navigation } = this.props;
    const veiculo = navigation.getParam("veiculo");

    return (
      <MarcasList
        data={Transport.marks.data}
        keyExtractor={item => String(item.codigo)}
        renderItem={this.renderItem}
        ListHeaderComponent={<Title>{`Marcas de ${veiculo.text}:`}</Title>}
      />
    );
  };

  render() {
    const { Transport } = this.props;

    if (Transport.marks.loading) return <Loading />;

    return (
      <Container>
        {Transport.marks.error ? (
          <ErrorFeedback
            message="Falha no carregamento das informações"
            buttonText="Tentar novamente"
            onButtonClick={() => Transport.loadMarks(Transport.marks.active)}
          />
        ) : (
          this.renderList()
        )}
      </Container>
    );
  }
}

export default connect(
  Marcas,
  ["Transport"]
);
