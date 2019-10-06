import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButtons = styled.div`
  position: absolute;
  left: 5vw;
  bottom: 190px;
  width: 140px;
  z-index: 1;
  display: flex;
  justify-content: space-between;

  > .nav-button {
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    border: 1px solid ${({ theme }) => theme.text.primary};
    padding: 12px;

    > .icon {
      display: none;
    }

    :hover {
      background-color: ${({ theme }) => theme.text.primary};
      color: ${({ theme }) => theme.bg.primary};
    }
  }

  @media screen and (min-width: 1024px) {
    top: calc(25vmin - 70px);
    bottom: initial;
    left: 0;
    transform: translateX(-50%);

    > .nav-button {
      border: none;
      background-color: transparent;

      :hover {
        background-color: transparent;
      }

      > .icon {
        display: block;
      }

      &.next {
        > .icon {
          transform: rotate(180deg);

          .circle {
            fill: ${({ theme }) => theme.text.primary};
          }

          .arrow {
            fill: ${({ theme }) => theme.bg.primary};
          }
        }
      }

      &.previous {
        .circle {
          fill: ${({ theme }) => theme.bg.primary};
        }

        .arrow {
          fill: ${({ theme }) => theme.text.primary};
        }
      }

      > .text {
        display: none;
      }
    }
  }
`;

const Buttons = ({ previous, next, currentIndex, total }) => (
  <StyledButtons>
    <button
      className='nav-button previous'
      disabled={currentIndex === 0}
      onClick={previous}
    >
      <span className='text'>Prev</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        id='next'
        width='29.053'
        height='29.053'
        viewBox='0 0 29.053 29.053'
        className='icon'
      >
        <g id='Group_11' data-name='Group 11'>
          <path
            id='Path_15'
            d='M14.527 0a14.527 14.527 0 1 0 14.526 14.527A14.527 14.527 0 0 0 14.527 0z'
            className='circle'
          />
        </g>
        <path
          id='Path_70'
          d='M95.846 137.461l8.805-6.792v3.131h9.887v7.331h-9.887v3.126z'
          className='arrow'
          transform='translate(-90.828 -122.825)'
        />
      </svg>
    </button>
    <button
      className='nav-button next'
      disabled={currentIndex === total}
      onClick={next}
    >
      <span className='text'>Next</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        id='next'
        width='29.053'
        height='29.053'
        viewBox='0 0 29.053 29.053'
        className='icon'
      >
        <g id='Group_11' data-name='Group 11'>
          <path
            id='Path_15'
            d='M14.527 0a14.527 14.527 0 1 0 14.526 14.527A14.527 14.527 0 0 0 14.527 0z'
            className='circle'
          />
        </g>
        <path
          id='Path_70'
          d='M95.846 137.461l8.805-6.792v3.131h9.887v7.331h-9.887v3.126z'
          className='arrow'
          transform='translate(-90.828 -122.825)'
        />
      </svg>
    </button>
  </StyledButtons>
);

Buttons.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired
};

export default Buttons;
