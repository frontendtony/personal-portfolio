import { createGlobalStyle } from 'styled-components';
import { grey } from '../../design-system/colors';

export default createGlobalStyle`
  body {
    background-color: ${grey.dark};
    color: ${grey.white};
  }
`;
