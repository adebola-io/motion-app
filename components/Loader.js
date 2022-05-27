import React, { Component } from "react";
import styles from "../styles/loader.module.css";
class Loader extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <div className={styles.loader_circle1}></div>
        <div className={styles.loader_circle2}></div>
      </div>
    );
  }
}

export default Loader;
