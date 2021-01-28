import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

import styles from "../styles/components/fixed-background.module.scss"



const FixedBackground = (props) => {
  const data = useStaticQuery(
    graphql`
        query {
            about1: file(relativePath: { eq: "backgrounds/about1.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 80)  {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcWebp
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            about2: file(relativePath: { eq: "backgrounds/about2.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 1920)  {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcWebp
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            collections: file(relativePath: { eq: "backgrounds/collections2.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 1920)  {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcWebp
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            shop: file(relativePath: { eq: "backgrounds/shop.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 1920)  {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcWebp
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
        }
        `
  )

  // Set ImageData.
  const image = data[props.image].childImageSharp.fluid

  return (
    <BackgroundImage
      className={styles.background}
      fluid={image}
      loading="eager"
      backgroundColour="#ffffff"
    >
    </BackgroundImage>
  )
}

export default FixedBackground