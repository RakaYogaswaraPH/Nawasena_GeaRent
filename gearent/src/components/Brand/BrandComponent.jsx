import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./Brand.module.css";
import imageBrand1 from "../../assets/image/brands/brand-1.png";
import imageBrand2 from "../../assets/image/brands/brand-2.png";
import imageBrand3 from "../../assets/image/brands/brand-3.png";
import imageBrand4 from "../../assets/image/brands/brand-4.png";
import imageBrand5 from "../../assets/image/brands/brand-5.png";
import imageBrand6 from "../../assets/image/brands/brand-6.png";
import imageBrand7 from "../../assets/image/brands/brand-7.png";

function BrandComponent() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return(
        <Container className={`${styles['brands']}`}>
            <Row className="gy-4">
                <Col lg={12}>
                    <Carousel
                        autoPlay
                        autoPlaySpeed={6000}
                        responsive={responsive}
                        arrows={false}
                        infinite
                        draggable
                        swipeable
                    >
                        <div className={styles.swiper}>
                            <img className={`d-block ${styles['image__brand']}`} src={imageBrand1} alt="First slide" />
                        </div>
                        <div className={styles.swiper}>
                            <img className={`d-block ${styles['image__brand']}`} src={imageBrand2} alt="Second slide" />
                        </div>
                        <div className={styles.swiper}>
                            <img className={`d-block ${styles['image__brand']}`} src={imageBrand3} alt="Third slide" />
                        </div>
                        <div className={styles.swiper}>
                            <img className={`d-block ${styles['image__brand']}`} src={imageBrand4} alt="Third slide" />
                        </div>
                        <div className={styles.swiper}>
                            <img className={`d-block ${styles['image__brand']}`} src={imageBrand5} alt="Third slide" />
                        </div>
                        <div className={styles.swiper}>
                            <img className={`d-block ${styles['image__brand']}`} src={imageBrand6} alt="Third slide" />
                        </div>
                        <div className={styles.swiper}>
                            <img className={`d-block ${styles['image__brand']}`} src={imageBrand7} alt="Third slide" />
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default BrandComponent;

