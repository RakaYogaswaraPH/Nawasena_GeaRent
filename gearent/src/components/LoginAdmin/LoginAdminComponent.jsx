import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import image from "../../assets/image/image_login.png";
import styles from "./Login.module.css";

function LoginAdminComponent() {
    return(
        <section className={`vh-100 ${styles['section']}`}>
            <Container fluid>
                <Row>
                    <Col sm={6} className="px-0 d-sm-block">
                        <img
                            src={image}
                            alt="image"
                            className={`w-100 vh-100 ${styles['image']}`}
                        />
                    </Col>
                    <Col sm={6} className="text-black">
                        {/* <div className="px-5 ms-xl-4">
                            <span className="h1 fw-bold mb-0">Logo</span>
                        </div> */}
            
                        <div className={`d-flex align-items-center justify-content-center mt-5 pt-5 ${styles['form__container']}`}>
                            <Form className={styles.form}>
                                <h3 className={`pb-3 ${styles['title__form']}`}>Login Admin Gearent</h3>
                                <p className={styles.description__form}>Ini merupakan halaman login khusus admin GeaRent</p>
                
                                <Form.Group className="mb-4">
                                    <Form.Control type="email" id="email" className={styles.input} placeholder="Email address" />
                                </Form.Group>
                
                                <Form.Group className="mb-4">
                                    <Form.Control type="password" id="password" className={styles.input} placeholder="Password" />
                                </Form.Group>
                
                                <div className="pt-1 mb-4">
                                    <Button type="button" className={`btn-get-started ${styles['btn-get-started']}`}>Masuk</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
      </section>
    );
}

export default LoginAdminComponent;