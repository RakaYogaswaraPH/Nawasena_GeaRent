import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsGeoAlt, BsEnvelope  } from "react-icons/bs";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import styles from "./Contact.module.css";

function ContactComponent() {
    return(
        <div id="contact" className={styles.contact}>
            <Container>
                <div className={styles.section__header}>
                    <h2 className={styles.contact__title}>KONTAK</h2>
                </div>

                <Row className="gx-lg-0 gy-4">
                <Col lg={4}>
                    <div className={`d-flex flex-column align-items-center justify-content-center ${styles['info__container']}`}>
                    <div className={`d-flex ${styles['info__item']}`}>
                        <i className={`flex-shrink-0 ${styles['icon']}`}><BsGeoAlt /></i>
                        <div>
                            <h4 className={styles.info__title}>Lokasi:</h4>
                            <p className={styles.info__description}>Jakarta, Indonesia</p>
                        </div>
                    </div>

                    <div className={`d-flex ${styles['info__item']}`}>
                        <i className={`flex-shrink-0 ${styles['icon']}`}><BsEnvelope /></i>
                        <div>
                            <h4 className={styles.info__title}>Email:</h4>
                            <p className={styles.info__description}>gearent1121@gmail.com</p>
                        </div>
                    </div>

                    <div className={`d-flex ${styles['info__item']}`}>
                        <i className={`flex-shrink-0 ${styles['icon']}`}><IoPhonePortraitSharp /></i>
                        <div>
                            <h4 className={styles.info__title}>Nomor Telepon:</h4>
                            <p className={styles.info__description}>+62 1234 56789</p>
                        </div>
                    </div>

                    <div className={`d-flex ${styles['info__item']}`}>
                        <i className={`flex-shrink-0 ${styles['icon']}`}><FaRegClock /></i>
                        <div>
                            <h4 className={styles.info__title}>Jam Operasional:</h4>
                            <p className={styles.info__description}>Senin-Jumat: 08.00 - 21.00</p>
                        </div>
                    </div>
                    </div>
                </Col>

                <Col lg={8}>
                    <Form
                    action="https://formspree.io/f/xleykjbk"
                    method="POST"
                    role="form"
                    className={styles.form}
                    >
                    <Row>
                        <Col md={6} className={styles.form__group}>
                        <Form.Control
                            className={styles.input}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Masukan Nama"
                            required
                        />
                        </Col>
                        <Col md={6} className={`mt-3 mt-md-0 ${styles['form__group']}`}>
                        <Form.Control
                            className={styles.input}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Masukan Email"
                            required
                        />
                        </Col>
                    </Row>
                    <Form.Group className={`mt-3 ${styles['form__group']}`}>
                        <Form.Control
                            className={styles.input}
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subjek"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-3 ${styles['form__group']}`}>
                        <Form.Control
                            className={styles.textarea}
                            as="textarea"
                            name="message"
                            rows="5"
                            placeholder="Masukan Pesan"
                            required
                        />
                    </Form.Group>
                    <div className={`text-center ${styles['container__button']}`}>
                        <Button className={styles.button} type="submit">Kirim Pesan</Button>
                    </div>
                    </Form>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactComponent;