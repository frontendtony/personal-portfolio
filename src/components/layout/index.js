import PropTypes from 'prop-types';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import darkTheme from '../../theme/dark';
import lightTheme from '../../theme/light';
import GlobalStyles from './GlobalStyles';
import './main.css';
import Menu from './menu';
import MenuButton from './MenuButton';
import ThemeSwitch from './ThemeSwitch';

const StyledPageLayout = styled.div`
  position: relative;
  overflow-y: ${({ isMenuOpen }) => (isMenuOpen ? 'hidden' : 'auto')};
`;

const Layout = ({ children, location }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(null);

  React.useLayoutEffect(() => {
    const storedIsDarkMode = localStorage.getItem('isDarkMode');
    setIsDarkMode(
      storedIsDarkMode === null || storedIsDarkMode === 'true' ? true : false
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    localStorage.setItem('isDarkMode', !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return isDarkMode === null ? null : (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StyledPageLayout isMenuOpen={isMenuOpen}>
        <GlobalStyles location={location} />
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
