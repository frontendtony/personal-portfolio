import PropTypes from 'prop-types';
import React from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';

const StyledSwitch = styled.label`
  position: absolute;
  left: 10vmin;
  top: 10vmin;
  width: 60px;
  height: 33px;
  cursor: pointer;
  z-index: 1;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      & + .slider {
        &::before {
          transform: translate(27px, 50%);
        }

        &::after {
          transform: translate(19px, 50%);
          z-index: 1;
        }

        > .star {
          z-index: 2;
        }
      }
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.text.primary};
    color: ${({ theme }) => theme.bg.primary};
    transition: all 0.3s linear;
    border-radius: 100px;

    &::before,
    &::after {
      position: absolute;
      content: '';
      height: 22px;
      width: 22px;
      left: 6.5px;
      bottom: 50%;
      background-color: ${({ theme }) => theme.bg.primary};
      transition: all 0.3s linear;
      border-radius: 50%;
      transform: translate(0, 50%);
    }

    &::after {
      background-color: ${({ theme }) => theme.text.primary};
      z-index: 0;
    }

    &::before {
      z-index: 1;
    }

    > .stars {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      display: inline-block;
      z-index: 2;

      > .star {
        position: absolute;
        left: -12px;
        bottom: -16px;
        z-index: -1;
        transform: scale(0.3);

        &.small {
          left: 5px;
          bottom: -22px;
          transform: scale(0.2);
        }
      }
    }
  }
`;

const ThemeSwitch = ({ isDarkMode, toggleDarkMode }) => {
  const transitions = useTransition(isDarkMode, null, {
    from: {
      position: 'absolute',
      opacity: 0,
      cloudTransform: 'scale(0.3) translate(10px, -30px)',
      starTransform: 'translateX(30px)'
    },
    enter: {
      opacity: 1,
      cloudTransform: 'scale(0.3) translate(40px, -30px)',
      starTransform: 'translateX(0)'
    },
    leave: {
      opacity: 0,
      cloudTransform: 'scale(0.3) translate(10px, -30px)',
      starTransform: 'translateX(30px)'
    }
  });

  return (
    <StyledSwitch>
      <input type='checkbox' checked={isDarkMode} onChange={toggleDarkMode} />
      <span className='slider'>
        {transitions.map(
          ({ item, key, props: { opacity, cloudTransform, starTransform } }) =>
            item ? (
              <animated.span
                className='stars'
                style={{ opacity, transform: starTransform }}
                key={key}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  version='1.0'
                  viewBox='0 0 176.000000 212.000000'
                  preserveAspectRatio='xMidYMid meet'
                  className='star'
                >
                  <metadata>
                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                  </metadata>
                  <g
                    transform='translate(0.000000,212.000000) scale(0.100000,-0.100000)'
                    fill='#000000'
                    stroke='none'
                  >
                    <path d='M877 2000 c-3 -14 -13 -70 -23 -125 -37 -223 -112 -430 -193 -532 -71 -89 -216 -188 -371 -252 l-55 -22 55 -23 c217 -90 346 -188 409 -313 47 -95 109 -307 160 -548 20 -97 23 -96 41 10 33 195 93 411 140 505 52 104 224 244 402 328 43 21 78 39 78 42 0 3 -35 23 -77 45 -109 57 -271 165 -320 213 -74 72 -123 194 -187 462 -19 80 -39 165 -44 190 -8 39 -10 41 -15 20z' />
                  </g>
                  <g
                    transform='translate(0.000000,212.000000) scale(0.100000,-0.100000)'
                    fill='#000000'
                    stroke='none'
                  >
                    <path d='M877 2000 c-3 -14 -13 -70 -23 -125 -37 -223 -112 -430 -193 -532 -71 -89 -216 -188 -371 -252 l-55 -22 55 -23 c217 -90 346 -188 409 -313 47 -95 109 -307 160 -548 20 -97 23 -96 41 10 33 195 93 411 140 505 52 104 224 244 402 328 43 21 78 39 78 42 0 3 -35 23 -77 45 -109 57 -271 165 -320 213 -74 72 -123 194 -187 462 -19 80 -39 165 -44 190 -8 39 -10 41 -15 20z' />
                  </g>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  version='1.0'
                  viewBox='0 0 176.000000 212.000000'
                  preserveAspectRatio='xMidYMid meet'
                  className='star small'
                  style={{ opacity }}
                >
                  <metadata>
                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                  </metadata>
                  <g
                    transform='translate(0.000000,212.000000) scale(0.100000,-0.100000)'
                    fill='#000000'
                    stroke='none'
                  >
                    <path d='M877 2000 c-3 -14 -13 -70 -23 -125 -37 -223 -112 -430 -193 -532 -71 -89 -216 -188 -371 -252 l-55 -22 55 -23 c217 -90 346 -188 409 -313 47 -95 109 -307 160 -548 20 -97 23 -96 41 10 33 195 93 411 140 505 52 104 224 244 402 328 43 21 78 39 78 42 0 3 -35 23 -77 45 -109 57 -271 165 -320 213 -74 72 -123 194 -187 462 -19 80 -39 165 -44 190 -8 39 -10 41 -15 20z' />
                  </g>
                </svg>
              </animated.span>
            ) : (
              <animated.svg
                style={{ opacity, transform: cloudTransform }}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                className='cloud'
                key={key}
              >
                <path
                  d='m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925'
                  fill='#fff'
                  transform='matrix(.77976 0 0 .78395-299.99-418.63)'
                />
              </animated.svg>
            )
        )}
      </span>
    </StyledSwitch>
  );
};

ThemeSwitch.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default ThemeSwitch;
