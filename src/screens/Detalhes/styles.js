import styled from "styled-components/native";
import colors from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
  padding-top: 20px;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #F5F5F5;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-width: 0.5px;
  border-bottom-color: #CCC;
`;

export const InfoLabel = styled.Text`
  color: ${colors.primary.medium};
  font-size: 15;
  font-weight: bold;
`;

export const InfoValue = styled.Text`
  color: ${colors.primary.medium};
  font-size: 16;
`;
