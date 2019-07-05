import React from "react";

import PropTypes from "prop-types";

import { Container, Message, Button, ButtonText } from "./styles";

const ErrorFeedback = ({ message, buttonText, onButtonClick }) => (
  <Container>
    <Message>{message}</Message>
    {buttonText && (
      <Button onPress={onButtonClick}>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    )}
  </Container>
);

ErrorFeedback.defaultProps = {
  onButtonClick: () => {},
  buttonText: ""
};

ErrorFeedback.propTypes = {
  onButtonClick: PropTypes.func,
  buttonText: PropTypes.string,
  message: PropTypes.string.isRequired
};

export default ErrorFeedback;
