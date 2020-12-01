import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSlider from "gatsby-image-background-slider";
import { useStaticQuery, graphql } from "gatsby";
import Title from "../components/title";
import TextSection from "../components/textSection";

const IndexPage = () => {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title=""></SEO>
      <div className="slider">
        <Title />
        <BackgroundSlider
          style={{
            height: "100vh",
          }}
          query={useStaticQuery(graphql`
            query {
              backgrounds: allFile(
                filter: { sourceInstanceName: { eq: "backgrounds" } }
              ) {
                nodes {
                  relativePath
                  childImageSharp {
                    fluid(maxWidth: 3840, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          `)}
        />
      </div>
      <main>
        <TextSection>
          <h2 id="about_me">Better Animals Plus</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </TextSection>
      </main>
    </Layout>
  );
};
export default IndexPage;
