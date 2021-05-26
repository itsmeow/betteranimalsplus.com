import PropTypes from "prop-types"

const StyledButton = ({
  className,
  height,
  color,
  textColor,
  hoverColor,
  style,
  children,
  ...rest
}) => {
  const styles = {
    color: textColor,
    height: height,
    backgroundColor: color,
    ":hover": {
      backgroundColor: hoverColor,
    },
  }
  return (
    <button
      {...rest}
      className={className ? `stylebutton ${className}` : "stylebutton"}
      style={{ ...styles, ...style }}
    >
      {children}
    </button>
  )
}

StyledButton.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  height: PropTypes.string,
  textColor: PropTypes.string,
}

StyledButton.defaultProps = {
  textColor: "#e2e2e2",
  height: "38px",
  color: "rgb(0, 132, 255)",
  hoverColor: "rgb(80, 170, 255)",
}

export default StyledButton
