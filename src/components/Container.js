import styled, { css } from 'styled-components';
import { SafeAreaView } from 'react-native';
import colors from '../constants/colors'

export default styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.basic.white};
  padding-top: ${props => props.top ? props.top : 0}px;
  ${props =>
    props.backColor &&
    css`
        background-color: ${props.backColor};
    `}
`