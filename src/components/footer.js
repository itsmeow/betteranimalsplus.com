import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="topfooter">
        {/* TODO INSERT LOGO */}
        <div className="github">
          <a
            href="https://github.com/itsmeow/betteranimalsplus/tree/web"
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
