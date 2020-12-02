import React from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import useWindowWidth from "../hooks/useWindowWidth";

const PageSection = ({ animateIn, children, ...delegate }) => {
  const width = useWindowWidth();
  return (
    <article className="highlightsection" {...delegate}>
      <div className="center-box">
        {width >= 768 && animateIn ? (
          <ScrollAnimation animateIn={animateIn} animateOnce>
            {children}
          </ScrollAnimation>
        ) : (
          children
        )}
      </div>
    </article>
  );
};

PageSection.propTypes = {
  children: PropTypes.element,
  animateIn: PropTypes.string,
};

export default PageSection;
