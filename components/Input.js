import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../styles/input.module.css";
class Input extends Component {
  render() {
    return (
      <>
        <label style={{ display: "none" }} htmlFor="">
          {this.props.name}
        </label>
        <input
          ref={this.props.ref}
          className={styles.inputbutton}
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name.toLowerCase()}
        />
      </>
    );
  }
}
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  name: "input",
  type: "text",
};
export default Input;
