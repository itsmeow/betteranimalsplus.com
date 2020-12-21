import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./styledButton";

const LinkButton = ({ className, link, children, blank, ...rest }) => {
  return (
    <a
      href={link}
      target={blank === true ? "_blank" : null}
      rel={blank === true ? "noopener noreferrer" : null}
      className="linkbuttonouter"
    >
      <StyledButton
        className={className ? `linkbutton ${className}` : "linkbutton"}
        {...rest}
      >
        {children}
      </StyledButton>
    </a>
  );
};

LinkButton.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
};

export default LinkButton;
