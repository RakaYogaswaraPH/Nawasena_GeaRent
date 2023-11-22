import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './Service.module.css';

function ServiceComponent({ icon, title, description }) {
  return (
      <Col lg={4} md={6}>
          <div className={` position-relative ${styles['service-item']}`}>
              <div className={styles.icon}>
                {icon}
              </div>
              <h3 className={styles.service__title}>{title}</h3>
              <p className={styles.service__description}>{description}</p>
          </div>
      </Col>
  );
}

export default ServiceComponent;