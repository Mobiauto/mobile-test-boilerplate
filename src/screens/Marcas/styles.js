import styled from "styled-components/native";
import colors from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
`;

export const MarcasList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 30
  }
})`
  margin-left: 20px;
  margin-right: 20px;
`;

export const MarcaButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  height: 50px;
  justify-content: center;
  background: ${colors.primary.medium};
  margin-bottom: 20px;
`;

export const MarcaButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
`;
