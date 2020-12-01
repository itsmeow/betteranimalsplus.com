import React from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import ScrollAnimation from "react-animate-on-scroll";
import useWindowWidth from "../hooks/useWindowWidth";

const TextSection = ({
  id,
  title,
  children,
  style,
  padding,
  animateIn,
  noParagraph,
  titleStyle,
}) => {
  const width = useWindowWidth();
  const styles = {
    paddingTop: padding,
    paddingBottom: padding,
  };
  const text = (
    <>
      {title ? (
        <h2 id={id} style={titleStyle}>
          {title}
        </h2>
      ) : (
        <></>
      )}
      {noParagraph ? children : <p>{children}</p>}
    </>
  );

  return (
    <article
      className="limit-width-pad-2 highlightsection"
      style={[styles, style]}
    >
      {width >= 768 && animateIn ? (
        <ScrollAnimation animateIn={animateIn} animateOnce>
          {text}
        </ScrollAnimation>
      ) : (
        text
      )}
    </article>
  );
};

TextSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string,
  children: PropTypes.element,
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  padding: PropTypes.string,
  animateIn: PropTypes.string,
  noParagraph: PropTypes.bool,
};

TextSection.defaultProps = {
  padding: "10%",
  noParagraph: false,
};

export default Radium(TextSection);
