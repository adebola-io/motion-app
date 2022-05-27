import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        type={this.props.type}
        style={{
          ...this.props,
          events: undefined,
          type: undefined,
          value: undefined,
        }}
        {...this.props.eventListeners}
      >
        {this.props.value}
      </button>
    );
  }
}

Button.defaultProps = {
  value: "Click Me",
  height: "45px",
  width: "150px",
  backgroundColor: `var(--complement)`,
  border: "none",
  borderRadius: "13px",
  fontWeight: "bold",
  color: `black`,
  cursor: "pointer",
};
export default Button;
