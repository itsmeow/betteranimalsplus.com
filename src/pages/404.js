import React from "react";

import SEO from "../components/seo";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";

const NotFoundPage = () => {
  const { lamprey } = useStaticQuery(
    graphql`
      query {
        lamprey: file(relativePath: { eq: "lamprey_cutout.png" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  return (
    <>
      <SEO title="404" description="The page linked doesn't exist!" image="/" />
      <main>
        <div
          className="title-holder"
          align="center"
          style={{ marginTop: "5%" }}
        >
          <h1 className="title-head">Better Animals Plus</h1>
          <p className="title-low">Breathing new life into your worlds</p>
        </div>
        <div
          align="center"
          style={{
            position: "absolute",
            width: "100%",
            margin: "0",
            top: "50vh",
            transform: "translateY(-50%)",
            padding: "3%",
          }}
        >
          <div
            className="lamprey-holder"
            style={{ width: "90%", maxWidth: "500px" }}
          >
            <Img fluid={lamprey.childImageSharp.fluid} alt="Lamprey" />
          </div>
          <p>
            Oops!
            <br />
            It looks like you're lost. Better get moving before Lampy the
            Lamprey gets you!
          </p>
          <Link to="/" className="link-no-style">
            <Button variant="primary">Take me home!</Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
