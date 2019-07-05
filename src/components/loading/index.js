import React from "react";
import { ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

import colors from "../../constants/colors";

import { Container } from "./styles";

const Loading = ({ visible }) =>
  !visible ? null : (
    <Container>
      <ActivityIndicator size="small" color={colors.primary.light} />
    </Container>
  );

Loading.defaultProps = {
  visible: true
};

Loading.propTypes = {
  visible: PropTypes.bool
};

export default Loading;
