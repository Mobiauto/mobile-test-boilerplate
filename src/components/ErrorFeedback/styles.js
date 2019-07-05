import styled from "styled-components/native";
import colors from '../../constants/colors'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${colors.red.light};
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  justify-content: center;
  background: #F1F1F1;
  padding: 20px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: 15px;
`;
