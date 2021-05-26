import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const StaffCard = ({
  name,
  role,
  links,
  image,
  style,
  className,
  children,
}) => {
  return (
    <section
      className={`highlightsection devsection${
        className ? " " + className : ""
      }`}
      style={style}
    >
      <div className="devlogo">
        <GatsbyImage image={image} alt={name + " avatar"} />
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
  )
}

StaffCard.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.object,
}

export default StaffCard
