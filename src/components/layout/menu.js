import React from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';

const StyledMenu = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  display: grid;
  align-content: space-between;
  background-color: ${({ theme }) => theme.bg.menu};
  color: ${({ theme }) => theme.text.primary};
  z-index: 2;
  padding: 10vmin;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;

  @media screen and (max-width: 1023px) {
    padding: 5vmin;
    padding-bottom: 10vmin;
  }

  > * {
    display: grid;
  }

  > .nav__links {
    font-size: 60px;
    font-weight: bold;
    line-height: 1.2;
    row-gap: 28px;

    @media screen and (max-width: 500px) {
      font-size: 45px;
    }
  }

  > .contact__links {
    font-size: 55px;
    justify-self: end;

    @media screen and (max-width: 500px) {
      font-size: 45px;
    }

    > .leading__text {
      font-size: 40px;

      @media screen and (max-width: 500px) {
        display: none;
      }
    }
  }

  > .social__links {
    row-gap: 20px;
  }

  .link {
    text-decoration: none;
  }
`;

const Menu = ({ isOpen }) => {
  const transitions = useTransition(isOpen, null, {
    from: {
      transform: 'translate(100%, -100%)',
      borderRadius: '50%',
      raise: 'translateY(1000px)',
      drop: 'translateY(-500px)',
      opacity: 0
    },
    enter: {
      transform: 'translate(0, 0)',
      borderRadius: '0%',
      raise: 'translateY(0)',
      drop: 'translateY(0)',
      opacity: 1
    },
    leave: {
      transform: 'translate(100vw, -100vh)',
      borderRadius: '50%',
      raise: 'translateY(1000px)',
      drop: 'translateY(-500px)',
      opacity: 0
    }
  });

  return transitions.map(
    ({ item, key, props: { borderRadius, transform, opacity, raise, drop } }) =>
      item && (
        <StyledMenu key={key} style={{ borderRadius, transform, opacity }}>
          <animated.h6 className='my__name' style={{ transform: drop }}>
            Anthony Oyathelemhi
          </animated.h6>
          <animated.div className='nav__links' style={{ transform: raise }}>
            <a className='link' href='/'>
              Home
            </a>
            <a className='link' href='/skills'>
              Skills
            </a>
            <a className='link' href='/projects'>
              Projects
            </a>
          </animated.div>
          <div className='social__links'>
            <a className='link' href='#'>
              Twitter
            </a>
            <a className='link' href='#'>
              Github
            </a>
            <a className='link' href='#'>
              Medium
            </a>
          </div>
          <animated.div className='contact__links' style={{ transform: raise }}>
            <span className='leading__text'>Got a project ?</span>
            <div>
              <a href='mailto:tonero91@gmail.com'>Email</a>
              {` `}/{` `}
              <a href='tel:+2347081627814'>Call</a>
            </div>
          </animated.div>
        </StyledMenu>
      )
  );
};

export default Menu;
