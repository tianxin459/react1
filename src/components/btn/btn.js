// index.js
import React from "react";
import PropTypes from "prop-types";

// import "./Button.css";

/**
 * The only true button.
 */
export default function Button2({ color, size, onClick, disabled, children }) {
  const styles = {
    color,
    fontSize: Button2.sizes[size],
  };

  return (
    <button
      className="button"
      style={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
Button2.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** The color for the button */
  color: PropTypes.string,
  /** The size of the button */
  size: PropTypes.oneOf(["small", "normal", "large"]),
  /** Disable button */
  disabled: PropTypes.bool,
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
};
Button2.defaultProps = {
  color: "#333",
  size: "normal",
  onClick: (event) => {
    // eslint-disable-next-line no-console
    console.log("You have clicked me!", event.target);
  },
};
Button2.sizes = {
  small: "10px",
  normal: "14px",
  large: "18px",
};
