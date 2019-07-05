import React from "react";

import PropTypes from "prop-types";

import { Container, VeiculoButton, VeiculoButtonText } from "./styles";

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Escolha um veículo"
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  state = {
    veiculosLista: [
      { key: "carros", text: "Carros" },
      { key: "motos", text: "Motos" },
      { key: "caminhoes", text: "Caminhões" }
    ]
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        {this.state.veiculosLista.map(veiculo => (
          <VeiculoButton
            key={veiculo.key}
            onPress={() => navigation.navigate("Marcas", { veiculo })}
          >
            <VeiculoButtonText>{veiculo.text}</VeiculoButtonText>
          </VeiculoButton>
        ))}
      </Container>
    );
  }
}

export default HomeScreen;
