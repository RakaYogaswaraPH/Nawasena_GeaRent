import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from "./Hero.module.css";
import IconBox from '../IconBox/IconBox';
import imageEmpty from "../../assets/image/Empty.png";

function HeroComponent() {
    return(
        <div id="hero" className={`hero ${styles.hero}`}>
            <Container className="position-relative">
                <Row className="gy-5" data-aos="fade-in">
                    <Col lg={6} order={2} className="order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                        <h2>Camping Jadi Simple dan Nyaman</h2>
                        <p className={styles.hero__description}>
                            Nikmati pengalaman outdoor yang seru dan bebas dengan GeaRent. Kami berkomitmen untuk memberikan
                            pelayanan terbaik kepada pelanggan kami, supaya Anda dapat menikmati pengalaman outdoor yang tak terlupakan.
                        </p>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <Button href="#about" className={`btn-get-started ${styles['btn-get-started']}`}>
                            Tentang Kami
                            </Button>
                        </div>
                    </Col>
                    <Col lg={6} order={1} className="order-lg-2">
                    <img
                        src={imageEmpty}
                        className="img-fluid"
                        alt=""
                        data-aos="zoom-out"
                        data-aos-delay="100"
                    />
                    </Col>
                </Row>
            </Container>
  
            <div className={`icon-boxes position-relative ${styles['icon-boxes']}`}>
            <Container className="position-relative">
                <Row className="gy-4 mt-5">
                    <IconBox title="Tenda" imgSrc="images/product/tenda.png" />
                    <IconBox title="Carrier" imgSrc="images/product/carrier.png" />
                    <IconBox title="Sepatu" imgSrc="images/product/sepatu.png" />
                    <IconBox title="Alat Support" imgSrc="images/product/kompor.png" />
                </Row>
            </Container>
            </div>
      </div>
    );
}

export default HeroComponent;