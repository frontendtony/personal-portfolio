import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';

const StyledName = styled(animated.h1)`
  font-size: 50px;
  margin-bottom: 40px;
  font-weight: normal;
  position: absolute;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-inline-box;

  @media screen and (max-height: 735px) {
    -webkit-line-clamp: 2;
  }

  @media screen and (max-height: 570px) {
    -webkit-line-clamp: 1;
  }
`;

const StyledDescription = styled.p`
  position: absolute !important;
  top: 120px;
  padding-bottom: 5vw;
`;

export const projectNames = [
  ({ ...rest }) => <StyledName {...rest}>Baya</StyledName>,
  ({ ...rest }) => <StyledName {...rest}>Flitrack</StyledName>,
  ({ ...rest }) => <StyledName {...rest}>Flitrack Admin</StyledName>,
  ({ ...rest }) => <StyledName {...rest}>PCSIS</StyledName>,
  ({ ...rest }) => (
    <StyledName {...rest}>
      Magodo Cultural Day, Lorem ipsum dolor sit amet.
    </StyledName>
  ),
  ({ ...rest }) => <StyledName {...rest}>Old Portfolio</StyledName>
];

export const projectDescriptions = [
  ({ ...rest }) => (
    <StyledDescription {...rest}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </StyledDescription>
  ),
  ({ ...rest }) => (
    <StyledDescription {...rest}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </StyledDescription>
  ),
  ({ ...rest }) => (
    <StyledDescription {...rest}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </StyledDescription>
  ),
  ({ ...rest }) => (
    <StyledDescription {...rest}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </StyledDescription>
  ),
  ({ ...rest }) => (
    <StyledDescription {...rest}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </StyledDescription>
  ),
  ({ ...rest }) => (
    <StyledDescription {...rest}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </StyledDescription>
  )
];
