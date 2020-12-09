import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import PictureGrid from "../components/PictureGrid";
import InfoBlock from "../components/InfoBlock";
import TestimonialsSlider from "../components/TestimonialsSlider";
import CollectionsMain from "../components/CollectionsMain";
import ProductsMain from "../components/ProductsMain";

// Styles, Fonts, Images
import styles from "../styles/pages/index.module.scss";

export default function Home({ data }) {

  return (
    <Layout
      pageMeta={{
        title: "Art by Jaret",
        description: "ArtByJaret is a collection of figure and portraits art meticulously created by Jaret Loggenberg.",
        canonical: "/",
      }}
    >

      {/* Landing */}
      <div className={styles.landing}>
        <PictureGrid
          gatsbyImage={data.landingImage.childImageSharp.fluid}
          colour="pink"
          landing={true}
        >
          <h1> Welcome </h1>
          <p><span>ArtByJaret is a collection of figure and portraits art meticulously created by Jaret Loggenberg.</span></p>
          <p>She prefers oil as medium of choice. Jaret's paintings reflect the natural warmth, emotions and inner beauty of a true female. She tries to make her art unique by expressing herself with bold strokes and natural colours.</p>
          <button className="button">
            <Link to="/about">Learn More</Link>
          </button>
        </PictureGrid>
      </div>


      {/* Collections */}
      <Section
        heading="Collections"
        subHeading="View the collection of Jaret's current &amp; previous work."
        stroke="green"
      >
        <CollectionsMain />
      </Section>


      {/* Jaret's Style */}
      <Section
        fullWidth={true}
      >
        <InfoBlock
          image={data.infoBlock1.childImageSharp.fluid}
          alignRight={true}
          count={1}
        >

          <h4>Jaret's Style</h4>
          <p>Jaret Loggenberg's paintings reflect the natural warmth, emotions and inner beauty of a true female.</p>
          <p> She tries to make her art unique by expressing herself with bold strokes and natural colours</p>
        </InfoBlock>

      </Section>

      {/* Shop */}
      <Section
        heading="Shop"
        subHeading="Shop Jaret's original artworks, gifts and small-scale artwork."
        stroke="blue"
      >
        <ProductsMain />
      </Section>

      {/* Testimonials */}
      <Section
        fullWidth={true}
      >
        <InfoBlock
          image={data.infoBlock2.childImageSharp.fluid}
          colour="yellow"
        >

          <h4>Testimonials</h4>
          <TestimonialsSlider />
        </InfoBlock>

      </Section>
    </Layout >
  )
}

export const data = graphql`
  query {
    landingImage: file(relativePath: { eq: "jaret/1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 90)  {
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
    infoBlock1: file(relativePath: { eq: "jaret/3.jpg" }) {
      childImageSharp {
        fluid  {
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
    infoBlock2: file(relativePath: { eq: "art/infoBlock2.jpg" }) {
      childImageSharp {
        fluid  {
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