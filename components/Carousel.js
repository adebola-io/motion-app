import PropTypes from "prop-types";
import styles from "../styles/carousel.module.css";
export default function Carousel({ height, children, heading, subheading }) {
  return (
    <>
      {heading && <h2>{heading}</h2>}
      {subheading && <h4>{subheading}</h4>}
      <section
        className={styles.carousel_container}
        style={{ height: `${height}px` }}
      >
        <div className={styles.carousel_lineup}>{children}</div>
      </section>
    </>
  );
}
Carousel.propTypes = {
  height: PropTypes.number,
};
Carousel.defaultProps = {
  height: 240,
};
