import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fixed(width: 128, height: 128, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  );
  return (
    <footer>
      <div className="topfooter">
        <Img
          alt="Better Animals Plus logo"
          fixed={logo.childImageSharp.fixed}
        />
        <div className="github">
          <a
            href="https://github.com/itsmeow/betteranimalsplus.com"
            className="link-no-style"
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub logo"
          >
            <FaGithub />
            <span>Source</span>
          </a>
        </div>
      </div>
      <div className="bottomfooter">
        <div className="left-text">
          by itsmeow - © {new Date().getFullYear()} - MIT License - Thanks for
          visiting!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
