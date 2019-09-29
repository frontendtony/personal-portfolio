// import { Link } from 'gatsby';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/utils/seo';
import { grey } from '../design-system/colors';

const StyledIndexPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  position: relative;

  .welcome-message {
    font-size: 80px;
    font-weight: bold;
    padding-left: 10vmin;

    @media screen and (max-width: 500px) {
      font-size: 70px;
    }

    @media screen and (max-height: 700px) {
      font-size: 50px;
    }
  }

  .blog-link {
    background-color: ${grey.black};
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
      background-color: ${grey.white};
      color: ${grey.darkText};
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <StyledIndexPage>
      <div className='welcome-message'>
        <p>Hi</p>
        <p>I'm Tony</p>
        <p>Front-end Engineer</p>
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

export default IndexPage;
