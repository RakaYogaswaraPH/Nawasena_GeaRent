import React from 'react';
import styles from "./TambahGambar.module.css";
import {Form, Button } from 'react-bootstrap';

function TambahGambar() {
    return(
            <div className={`p-5 ${styles['container']}`}>
                <div className={`p-4 ${styles['card']}`}>
                    <Form
                    action="#"
                    method="POST"
                    role="form"
                    className={styles.form}
                    >
                        <h2 className={`${styles['title']}`}>Tambah Gambar</h2>
                        <Form.Group className={`mt-2 ${styles['form__group']}`}>
                            <label htmlFor="id" className={`mb-2 ${styles['label']}`}>Id</label>
                                <Form.Control
                                    className={styles.input}
                                    type="text"
                                    name="id"
                                    id="id"
                                    placeholder="Masukan Id"
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
                        <Form.Group className={`mt-2 ${styles['form__group']}`}>
                            <label htmlFor="harga" className={`mb-2 ${styles['label']}`}>Kode_barang_id</label>
                            <Form.Control
                                className={styles.input}
                                type="number"
                                name="harga"
                                id="harga"
                                placeholder="Masukan Kode_barang_id"
                                required
                            />
                        </Form.Group>
                        <div className={`text-center ${styles['container__button']}`}>
                            <Button className={styles.button} type="submit">Tambah</Button>
                        </div>
                    </Form>
            </div>
        </div>
    );
}

export default TambahGambar;