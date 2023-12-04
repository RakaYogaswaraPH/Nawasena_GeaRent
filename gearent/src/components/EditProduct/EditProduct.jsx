import React from 'react';
import styles from "./EditProduct.module.css";
import {Form, Button } from 'react-bootstrap';

function EditProduct() {
    return(
        <div className={`p-5 ${styles['container']}`}>
            <div className={`p-4 ${styles['card']}`}>
                <Form
                action="#"
                method="POST"
                role="form"
                className={styles.form}
                >
                    <h2 className={`${styles['title']}`}>Edit Barang</h2>
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
                        <label htmlFor="name" className={`mb-2 ${styles['label']}`}>Nama</label>
                        <Form.Control
                            className={styles.input}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Masukan Nama Barang"
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
                            placeholder="Masukan Harga"
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
                            placeholder="Masukan Harga"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="toko" className={`mb-2 ${styles['label']}`}>Toko_id</label>
                        <Form.Control
                            className={styles.input}
                            type="number"
                            name="toko"
                            id="toko"
                            placeholder="Masukan Harga"
                            required
                        />
                    </Form.Group>
                    <div className={`text-center ${styles['container__button']}`}>
                        <Button className={styles.button} type="submit">Edit</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default EditProduct;