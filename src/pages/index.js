// import { Link } from 'gatsby';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../utils/seo';
import useInterval from '../utils/useInterval';

const StyledIndexPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  position: relative;

  .welcome-message {
    font-size: 80px;
    font-weight: bold;
    padding: 0 10vmin;
    margin-top: -20vh;

    @media screen and (max-width: 500px) {
      font-size: 70px;
    }

    @media screen and (max-height: 700px) {
      font-size: 50px;
    }

    @media screen and (max-height: 830px) {
      padding: 0 5vmin;
    }

    @media screen and (min-width: 1024px) {
      padding: 0 10vmin;
    }
  }

  .blog-link {
    background-color: ${({ theme }) => theme.text.primary};
    color: ${({ theme }) => theme.bg.primary};
    position: fixed;
    right: -64px;
    bottom: -83px;
    transform: rotate(-45deg);
    width: 106px;
    height: 140px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    transition: background-color 0.1s linear;
    z-index: 1;

    :hover {
      background-color: ${({ theme }) => theme.bg.alternate};
      color: ${({ theme }) => theme.text.alternate};
    }
  }
`;

const IndexPage = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useInterval(
    () => setTitleIndex(titleIndex => titleIndex + 1),
    titleIndex < 4 ? 3000 : null
  );

  const transitions = useTransition(titleIndex, null, {
    from: {
      transform: 'rotateX(-180deg)',
      opacity: 0,
      position: 'absolute'
    },
    enter: {
      transform: 'rotateX(0deg)',
      opacity: 1
    },
    leave: {
      transform: 'rotateX(180deg)',
      opacity: 0
    },
    config: { mass: 1, tension: 170, friction: 14 },
    delay: 500
  });

  const titles = [
    ({ style }) => <animated.p style={style}>Front-end Developer</animated.p>,
    ({ style }) => <animated.p style={style}>CSS Lover</animated.p>,
    ({ style }) => <animated.p style={style}>JavaScript Maestro</animated.p>,
    ({ style }) => <animated.p style={style}>React Ninja</animated.p>,
    ({ style }) => <animated.p style={style}>Teacher & Mentor</animated.p>
  ];

  const resetAnimation = () => {
    if (titleIndex === 4) {
      setTitleIndex(0);
    }
  };

  return (
    <Layout>
      <SEO title='Home' />
      <StyledIndexPage>
        <div className='welcome-message' onClick={resetAnimation}>
          <p>Hi</p>
          <p>I'm Tony,</p>
          {transitions.map(({ item, key, props }) => {
            const Title = titles[item];
            return <Title key={key} style={props} />;
          })}
        </div>

        <a href='#' className='blog-link'>
          Blog
        </a>
      </StyledIndexPage>

      {/* <AniLink cover direction='up' bg='#fff' top='entry' to='/page-2/'>
      Go to page 2
    </AniLink> */}
    </Layout>
  );
};

export default IndexPage;
