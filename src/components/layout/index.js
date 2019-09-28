import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import './main.css';
import Menu from './menu';

const StyledPageLayout = styled.div`
  position: relative;

  > .menu-button {
    display: grid;
    grid-template: 15px 15px / 15px 15px;
    gap: 3px;
    position: absolute;
    right: 50px;
    top: 50px;
    cursor: pointer;
    z-index: 5;
    transition: all 0.3s ease-out;

    &.open {
      gap: 0px;
      transform: rotate(-180deg);
    }
  }
`;

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <StyledPageLayout>
      <GlobalStyles />
      <Menu isOpen={isMenuOpen} />
      <div
        className={`menu-button ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <svg
          width='15'
          height='15'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='15' height='15' fill='white' />
        </svg>
        <svg
          width='15'
          height='15'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='15' height='15' fill='white' />
        </svg>
        <svg
          width='15'
          height='15'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='15' height='15' fill='white' />
        </svg>
        <svg
          width='15'
          height='15'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='15' height='15' fill='white' />
        </svg>
      </div>
      <main>{children}</main>
    </StyledPageLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
