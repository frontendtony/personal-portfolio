import React from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import { grey } from '../../design-system/colors';

const StyledMenu = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  display: grid;
  align-content: space-between;
  background-color: ${grey.black};
  z-index: 2;
  padding: 50px;
  overflow: hidden;
  position: absolute;
  right: 0;
  bottom: 0;

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
      borderRadius: '50%'
    },
    enter: {
      transform: 'translate(0, 0)',
      borderRadius: '0%'
    },
    leave: {
      transform: 'translate(100vw, -100vh)',
      borderRadius: '50%'
    }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <StyledMenu key={key} style={props}>
          <h6 className='my__name'>Anthony Oyathelemhi</h6>
          <div className='nav__links'>
            <a className='link' href='/'>
              Home
            </a>
            <a className='link' href='/skills'>
              Skills
            </a>
            <a className='link' href='/projetcs'>
              Projects
            </a>
          </div>
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
          <div className='contact__links'>
            <span className='leading__text'>Got a project ?</span>
            <div>
              <a href='mailto:tonero91@gmail.com'>Email</a>
              {` `}/{` `}
              <a href='tel:+2347081627814'>Call</a>
            </div>
          </div>
        </StyledMenu>
      )
  );
};

export default Menu;
