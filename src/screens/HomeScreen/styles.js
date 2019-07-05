import styled from "styled-components/native";
import colors from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const VeiculoButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  height: 50px;
  justify-content: center;
  background: ${colors.primary.medium};
  margin-bottom: 20px;
`;

export const VeiculoButtonText = styled.Text`
  text-align: center;
  font-size: 15px;
  color: #fff;
`;
