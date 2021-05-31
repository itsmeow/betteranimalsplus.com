import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

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
  let [hoverRef, isHovered] = useHover()
  return (
    <button
      {...rest}
      className={className ? `stylebutton ${className}` : "stylebutton"}
      ref={hoverRef}
      style={{
        ...{
          color: textColor,
          height: height,
          backgroundColor: isHovered ? hoverColor : color,
        },
        ...style,
      }}
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
