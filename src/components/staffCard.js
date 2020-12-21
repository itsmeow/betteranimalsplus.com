import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const StaffCard = ({
  name,
  role,
  links,
  image,
  style,
  className,
  children,
}) => {
  const sources = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "devlogos" } }) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid(maxHeight: 175, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return (
    <section
      className={`highlightsection devsection${
        className ? " " + className : ""
      }`}
      style={style}
    >
      <div className="devlogo">
        <Img
          fluid={
            sources.images.edges.find((i) => i.node.relativePath === image).node
              .childImageSharp.fluid
          }
          alt={name + " avatar"}
        />
      </div>
      <section className="devinfo">
        <section className="devtop">
          <section className="devmaininfo">
            <h2 className="devname">{name}</h2>
            <span className="devrole">{role}</span>
          </section>
          {links ? <section className="devlinks">{links}</section> : <></>}
        </section>
        <p>{children}</p>
      </section>
    </section>
  );
};

StaffCard.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.string,
};

export default StaffCard;
