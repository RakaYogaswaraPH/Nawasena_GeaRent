import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./Toko.module.css";
import imageToko1 from "../../assets/image/toko-1.png";
import imageToko2 from "../../assets/image/toko-2.png";
import imageToko3 from "../../assets/image/toko-3.png";

function TokoComponent() {
    return(
        <div id="toko" >
            <Container className={styles.toko}>
                <div className={styles.section__header}>
                    <h2 className={styles.toko__title}>TOKO</h2>
                </div>
        
                <div>
                    <Row className="gy-4">
                        <Col xl={4} md={6}>
                            <div className={styles.toko__wrap}>
                                <a href="#">
                                    <img src={imageToko1} alt="toko-1" className={styles.image__toko} />
                                </a>
                                <div className={styles.toko__info}>
                                    <h4 className={styles.name__toko}>
                                        <a href="#" className={styles.anchor}>Green Campus Outdoor</a>
                                    </h4>
                                    <p>Jln. Jabaru I No.13</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6}>
                            <div className={styles.toko__wrap}>
                                <a href="#">
                                    <img src={imageToko2} alt="toko-2" className={styles.image__toko}/>
                                </a>
                                <div className={styles.toko__info}>
                                    <h4 className={styles.name__toko}>
                                        <a href="#" className={styles.anchor}>Bandakala Rental</a>
                                    </h4>
                                    <p>Jln. Raya Kemang Baru Setu</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={6}>
                            <div className={styles.toko__wrap}>
                                <a href="#">
                                    <img src={imageToko3} alt="" className={styles.image__toko}/>
                                </a>
                                <div className={styles.toko__info}>
                                    <h4 className={styles.name__toko}>
                                        <a href="#" className={styles.anchor}>Cirrus Outdoor</a>
                                    </h4>
                                    <p>Jln. Babakan Lio No.29</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default TokoComponent;