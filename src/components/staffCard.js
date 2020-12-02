import React from "react";
import PropTypes from "prop-types";

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
      <img className="devlogo" alt={name + " avatar"} src={image}></img>
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
};

export default StaffCard;
