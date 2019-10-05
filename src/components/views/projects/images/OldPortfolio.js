import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Image = ({ ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "old-portfolio.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} {...rest} />;
};

export default Image;
