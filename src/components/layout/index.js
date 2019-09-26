/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from 'prop-types';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import './main.css';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
