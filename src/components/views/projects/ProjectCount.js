import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledNumbers = styled.span`
  position: absolute;
  right: 5vw;
  bottom: 140px;
  color: ${({ theme }) => theme.text.primary};
  font-size: 60px;
  font-weight: bold;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.text.primary};
  z-index: 1;
  font-variant-numeric: tabular-nums;

  @media screen and (max-width: 1023px) {
    .project-count {
      position: absolute;
      top: -40px;
      right: 0;
      font-size: 15px;
      font-weight: normal;
      border-bottom: 1px solid ${({ theme }) => theme.text.primary};
      display: inline-block;
      padding-bottom: 16px;

      .slash {
        display: none;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    left: calc(30vw + 10px);
    top: 50vh;
    font-size: 20px;
    writing-mode: vertical-lr;
    font-weight: normal;
    -webkit-text-fill-color: ${({ theme }) => theme.text.primary};
    -webkit-text-stroke-width: 0px;

    .project-count {
      position: static;
      display: inline;
    }
  }
`;

const Numbers = ({ current, total }) => (
  <StyledNumbers>
    {current.toString().padStart(3, '0')}
    <span className='project-count'>
      {` `} <span className='slash'>/</span> {total.toString().padStart(3, '0')}
    </span>
  </StyledNumbers>
);

Numbers.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Numbers;
