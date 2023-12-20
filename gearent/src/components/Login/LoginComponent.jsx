import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import image from "../../assets/image/image_login.png";
import styles from "./Login.module.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:9987/api/admin/login', {
                username: username,
                password: password
            });

            navigate('/dashboard/');
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.errors);
            }
        }
    }

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
                            <Form onSubmit={handleLogin} className={styles.form} >
                                <h3 className={`pb-3 ${styles['title__form']}`}>Selamat Datang di GeaRent</h3>
                                <p className={styles.description__form}>Nikmati pengalaman outdoor yang seru dan bebas dengan GeaRent</p>
                
                                <Form.Group className="mb-4">
                                    <Form.Control type="text" id="username" className={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                                </Form.Group>
                
                                <Form.Group className="mb-4">
                                    <Form.Control type="password" id="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </Form.Group>
                
                                <div className="pt-1 mb-4">
                                    <div>
                                        <Button type="submit" className={`btn-get-started ${styles['btn-get-started']}`}>Masuk</Button>
                                    </div>
                                </div>
                                <p className="text-center text-danger">{errors}</p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
      </section>
    );
}

export default LoginComponent;