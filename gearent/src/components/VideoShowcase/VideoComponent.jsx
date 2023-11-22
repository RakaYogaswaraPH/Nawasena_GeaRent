import React from 'react';
import { Container } from 'react-bootstrap';

import styles from "./Video.module.css";

function VideoComponent() {
    return(
        <div id="video-showcase" className={styles['videoShowcase']}>
            <Container className={`text-center ${styles.container}`} data-aos="zoom-out">
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className={`${styles['play-btn']}`} target="_blank"></a>
                <h2 className={styles.video__title}>GeaRent</h2>
                <p className={styles.video__description}>Nikmati wisata alam dengan lebih mudah dan menyenangkan</p>
            </Container>
        </div>
    );
}

export default VideoComponent;