import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from "./FormProduk.module.css";

function FormProduk() {
    return(
        <div className={styles.product}>
            <Container>

                <Row className="justify-content-center gx-lg-0 gy-4">
                    <Col lg={8}>
                        <Form
                        action="#"
                        method="POST"
                        role="form"
                        className={styles.form}
                        >
                         
                            <div className={styles.section__header}>
                                <h2 className={styles.product__title}>TAMBAH BARANG</h2>
                            </div>
                            <Form.Group className={`mt-2 ${styles['form__group']}`}>
                                <label htmlFor="name" className={`mb-2 ${styles['label']}`}>Nama Barang</label>
                                    <Form.Control
                                        className={styles.input}
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Masukan Nama"
                                        required
                                    />
                            </Form.Group>
                            <Form.Group className={`mt-2 ${styles['form__group']}`}>
                                <label htmlFor="deskripsi" className={`mb-2 ${styles['label']}`}>Deskripsi</label>
                                <Form.Control
                                    className={styles.textarea}
                                    as="textarea"
                                    name="deskripsi"
                                    rows="3"
                                    placeholder="Masukan Deskripsi"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={`mt-2 ${styles['form__group']}`}>
                                <label htmlFor="harga" className={`mb-2 ${styles['label']}`}>Harga</label>
                                <Form.Control
                                    className={styles.input}
                                    type="number"
                                    name="harga"
                                    id="harga"
                                    placeholder="Masukan Harga dengan Angka *contoh : 10000*"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={`mt-2 ${styles['form__group']}`}>
                                <label htmlFor="stok" className={`mb-2 ${styles['label']}`}>Stok</label>
                                <Form.Control
                                    className={styles.input}
                                    type="number"
                                    name="stok"
                                    id="stok"
                                    placeholder="Masukan Stok dengan Angka *contoh : 1*"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={`mt-2 ${styles['form__group']}`}>
                                <label htmlFor="gambar" className={`mb-2 ${styles['label']}`}>Gambar</label>
                                <Form.Control
                                    className={`${styles['input']}`}
                                    type="file"
                                    name="gambar"
                                    id="gambar"
                                    required
                                />
                            </Form.Group>
                            <div className={`text-center ${styles['container__button']}`}>
                                <Button className={styles.button} type="submit">Tambah</Button>
                            </div>
                            <p className={`${styles['note']}`}>**Note : Form ini hanya di isi jika toko penyedia barang sewa ingin menambahkan barang sewaannya.**</p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FormProduk;