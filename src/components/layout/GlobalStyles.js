import { createGlobalStyle } from 'styled-components';
import { grey } from '../../design-system/colors';
import fontFiles from '../../fonts/fonts';

export default createGlobalStyle`
  @font-face {
    font-family: "Moderat";
    font-style: normal;
    font-weight: normal;
    src: local("Moderat"), local("Moderat"), url(${fontFiles.ModeratRegularWOFF}) format("woff"), url(${fontFiles.ModeratRegularWOFF2}) format("woff2");
  }

  html {
    font-family: Moderat;
  }

  body {
    position: relative;
    min-height: 100vh;
    background-color: ${grey.dark};
    color: ${grey.white};
  }
`;
