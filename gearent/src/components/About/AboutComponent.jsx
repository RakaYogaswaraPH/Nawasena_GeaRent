import { Container, Row, Col } from "react-bootstrap";
import styles from "./About.module.css";
import imageLeft from "../../assets/image/Png1.png";
import imageRight from "../../assets/image/Png2.png";

function AboutComponent() {
    return(
        <div id="main" className={styles.container}>
            <section id="about" className={styles.about__section}>
                <div className={styles.section__header} data-aos="fade-up">
                    <h2 className={styles.about__title}>TENTANG KAMI</h2>
                </div>

                <Container data-aos="fade-up">
                    <Row className="gy-4 align-items-center">
                        <Col lg={6}>
                            <img src={imageLeft} alt="image-left" className="img-fluid" />
                        </Col>
                        <Col lg={6}>
                            <div className={`d-flex align-items-center ${styles['about__subtitle1']}`}>
                                <span>Penyewaan Alat Pendakian (Outdoor)</span>
                            </div>
                            <p className={styles.about__description1}>
                                GeaRent adalah platform penyewaan perlengkapan outdoor yang terlengkap dan berkualitas. Menyediakan berbagai macam perlengkapan, mulai dari tenda, sleeping bag, hingga peralatan pendukung tambahan.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
  
            <section className={styles.about__section} id="about">
                <Container data-aos="fade-up">
                    <Row className="gy-4 align-items-center">
                        <Col lg={6}>
                            <div className={`d-flex align-items-center ${styles['about__subtitle2']}`}>
                                <span>Wisata Alam Menjadi Menyenangkan</span>
                            </div>
                            <p className={styles.about__description2}>
                                Gunakan layanan penyewaan barang di GeaRent. Dengan harga yang terjangkau Anda bisa menikmati keindahan alam tanpa perlu khawatir dengan perlengkapan yang kurang memadai.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <img src={imageRight} alt="image-right" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
      </div>
    );
}

export default AboutComponent;