import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import image from "../../assets/image/image_login.png";
import styles from "./Login.module.css";

function LoginComponent() {
    return(
        <section className="vh-100">
            <Container fluid>
                <Row>
                    <Col sm={6} className="px-0 d-none d-sm-block">
                        <img
                            src={image}
                            alt="Login image"
                            className="w-100 vh-100"
                            style={{ objectFit: 'cover', objectPosition: 'left' }}
                        />
                    </Col>
                    <Col sm={6} className="text-black">
                        {/* <div className="px-5 ms-xl-4">
                            <span className="h1 fw-bold mb-0">Logo</span>
                        </div> */}
            
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                            <Form style={{ width: '23rem' }}>
                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                
                                <Form.Group className="mb-4">
                                    <Form.Control type="email" id="form2Example18" placeholder="Email address" />
                                </Form.Group>
                
                                <Form.Group className="mb-4">
                                    <Form.Control type="password" id="form2Example28" placeholder="Password" />
                                </Form.Group>
                
                                <div className="pt-1 mb-4">
                                    <Button variant="primary" size="lg" block="true" type="button">Masuk</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
      </section>
    );
}

export default LoginComponent;