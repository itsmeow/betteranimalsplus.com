import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSlider from "gatsby-image-background-slider";
import { useStaticQuery, graphql } from "gatsby";
import Title from "../components/title";
import PageSection from "../components/pageSection";
import DownloadOdometer from "../components/downloadOdometer";
import LinkButton from "../components/linkButton";
import PatreonButton from "../components/patreon";
import StaffCard from "../components/staffCard";
import itsmeowLogo from "../data/logos/itsmeow.png";
import cybercatLogo from "../data/logos/cybercat5555.png";
import batLogo from "../data/logos/batpixxler.png";

const IndexPage = () => {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title=""></SEO>
      <div className="slider">
        <Title animateIn="animate__jackInTheBox" />
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
        <PageSection animateIn="animate__zoomInDown">
          <div className="text-center medium">With Over</div>
          <DownloadOdometer initialValue="1000000" />
          <div className="text-center medium">Downloads</div>
        </PageSection>
        <PageSection animateIn="animate__bounceInRight">
          <div className="text-center medium">Built by</div>
          <div className="limit-width">
            <StaffCard
              name="cybercat5555"
              role="Lead Artist and Designer"
              image={cybercatLogo}
              style={{ marginBottom: "20px" }}
              className="center-item-2"
            >
              Cybercat is responsible for creating models, textures, ideas, and
              is the lead designer for the mod. Cyber created Better Animals
              Plus and built the team responsible.
            </StaffCard>
            <StaffCard
              name="itsmeow"
              role="Lead Programmer"
              image={itsmeowLogo}
              style={{ marginBottom: "20px" }}
              className="center-item-2"
              links={
                <>
                  <LinkButton
                    link="https://itsmeow.dev/"
                    color="rgb(25, 144, 255)"
                    hoverColor="rgb(0, 132, 255)"
                    style={{ transitionDuration: "300ms" }}
                  >
                    Website
                  </LinkButton>
                  <PatreonButton className="devlinkbutton" />
                </>
              }
            >
              As the lead and sole Programmer, itsmeow is responsible for
              creating the AI, items, blocks, and code required to make the mod
              function, as well as adding complimentary features such as
              configuration.
            </StaffCard>
            <StaffCard
              name="Batpixxler"
              role="Artist and Designer"
              image={batLogo}
              className="center-item-2"
            >
              Batpixxler, otherwise known as Batman, assists Cyber in design and
              makes art for Better Animals Plus.
            </StaffCard>
          </div>
        </PageSection>
      </main>
    </Layout>
  );
};
export default IndexPage;
