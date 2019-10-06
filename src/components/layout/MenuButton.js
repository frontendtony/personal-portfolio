import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledMenuButton = styled.div`
  display: grid;
  grid-template: 15px 15px / 15px 15px;
  gap: 3px;
  position: absolute;
  right: 10vmin;
  top: 10vmin;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease-out;

  @media screen and (max-width: 1023px) {
    right: 5vmin;
    top: 5vmin;
  }

  &.open {
    gap: 0px;
    transform: rotate(-180deg);
  }

  rect {
    fill: ${({ theme }) => theme.text.primary};
  }
`;

const MenuButton = ({ isMenuOpen, toggleMenu }) => (
  <StyledMenuButton
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
      <rect width='15' height='15' />
    </svg>
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='15' height='15' />
    </svg>
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='15' height='15' />
    </svg>
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='15' height='15' />
    </svg>
  </StyledMenuButton>
);

MenuButton.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default MenuButton;
