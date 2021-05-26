import { StaticImage } from "gatsby-plugin-image"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="topfooter">
        <StaticImage
          src="./../data/icon.png"
          alt="Better Animals Plus logo"
          layout="fixed"
          width={128}
          height={128}
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
  )
}

export default Footer
