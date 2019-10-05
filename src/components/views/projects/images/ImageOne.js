import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "image1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      className='project-image'
    />
  );
};

export default Image;
