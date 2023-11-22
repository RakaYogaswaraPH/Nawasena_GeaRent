import { Container, Col, Row  } from "react-bootstrap";
import styles from "./Gearent.module.css";
import image from "../../assets/image/Png3.png";

function GearentComponent() {
    return(
        <div id="main" className={styles.container}>
            <section id="about" className={styles.gearent__section}>
                <Container data-aos="fade-up">
                    <Row className="gy-4 align-items-center">
                        <Col lg={6}>
                            <img src={image} alt="image" className="img-fluid" />
                        </Col>
                        <Col lg={6}>
                            <p className={styles.gearent__description}>
                                GeaRent adalah platform penyewaan perlengkapan outdoor yang terlengkap dan berkualitas. Menyediakan berbagai macam perlengkapan, mulai dari tenda, sleeping bag, hingga peralatan pendukung tambahan.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default GearentComponent;