import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-color: ${({ theme, location }) => {
      return location === '/projects/'
        ? theme.bg.projectDescription
        : theme.bg.primary;
    }};
    color: ${({ theme }) => theme.text.primary};
  }
`;
