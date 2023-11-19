import React from 'react';
import { Col } from 'react-bootstrap';
import styles from "./IconBox.module.css";

function IconBox({title, imgSrc}) {
    return(
        <Col xl={3} md={6} data-aos="fade-up" data-aos-delay="100">
        <div className={styles.icon__box}>
          <div className={styles.icon}>
            <img src={imgSrc} alt={title} />
          </div>
          <h4 className={styles.icon__title}>
            <a className={styles.icon__anchor}>{title}</a>
          </h4>
        </div>
      </Col>
    );
}

export default IconBox;