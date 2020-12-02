import React from "react"
import PropTypes from "prop-types"
import StyledButton from "./styledButton"

const LinkButton = ({ className, link, children, ...rest }) => {
  return (
    <a href={link} className="linkbuttonouter">
      <StyledButton
        className={className ? `linkbutton ${className}` : "linkbutton"}
        {...rest}
      >
        {children}
      </StyledButton>
    </a>
  )
}

LinkButton.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
}

export default LinkButton
