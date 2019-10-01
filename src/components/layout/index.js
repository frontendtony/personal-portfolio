import PropTypes from 'prop-types';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import darkTheme from '../../theme/dark';
import lightTheme from '../../theme/light';
import GlobalStyles from './GlobalStyles';
import './main.css';
import Menu from './menu';
import ThemeSwitch from './ThemeSwitch';
import MenuButton from './MenuButton';

const StyledPageLayout = styled.div`
  position: relative;
`;

const Layout = ({ children }) => {
  const storedIsDarkMode = localStorage.getItem('isDarkMode');

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(
    storedIsDarkMode === 'true' ? true : false
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = e => {
    localStorage.setItem('isDarkMode', !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StyledPageLayout>
        <GlobalStyles />
        <Menu isOpen={isMenuOpen} />
        <ThemeSwitch {...{ isDarkMode, toggleDarkMode }} />
        <MenuButton {...{ isMenuOpen, toggleMenu }} />
        <main>{children}</main>
      </StyledPageLayout>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
