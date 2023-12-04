import React from 'react';
import styles from "./EditStore.module.css";
import {Form, Button } from 'react-bootstrap';

function EditStore() {
    return(
        <div className={`p-5 ${styles['container']}`}>
            <div className={`p-4 ${styles['card']}`}>
                <Form
                action="#"
                method="POST"
                role="form"
                className={styles.form}
                >
                    <h2 className={`${styles['title']}`}>Edit Toko</h2>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="kode_toko" className={`mb-2 ${styles['label']}`}>Kode_toko</label>
                            <Form.Control
                                className={styles.input}
                                type="text"
                                name="kode_toko"
                                id="kode_toko"
                                placeholder="Masukan Kode Toko"
                                required
                            />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="nama" className={`mb-2 ${styles['label']}`}>Nama</label>
                        <Form.Control
                            className={styles.input}
                            type="text"
                            name="nama"
                            id="nama"
                            placeholder="Masukan Nama Toko"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="email" className={`mb-2 ${styles['label']}`}>Email</label>
                        <Form.Control
                            className={styles.input}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Masukan Email Address"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="id_alamat" className={`mb-2 ${styles['label']}`}>Id_alamat</label>
                        <Form.Control
                            className={styles.input}
                            type="number"
                            name="id_alamat"
                            id="id_alamat"
                            placeholder="Masukan Id Alamat"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="no_telepon" className={`mb-2 ${styles['label']}`}>No_telepon</label>
                        <Form.Control
                            className={styles.input}
                            type="number"
                            name="no_telepon"
                            id="no_telepon"
                            placeholder="Masukan Nomor Telepon"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                            <label htmlFor="profile" className={`mb-2 ${styles['label']}`}>Profile</label>
                            <Form.Control
                                className={`${styles['input']}`}
                                type="file"
                                name="profile"
                                id="profile"
                                required
                            />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="id_user" className={`mb-2 ${styles['label']}`}>Id_user</label>
                        <Form.Control
                            className={styles.input}
                            type="number"
                            name="id_user"
                            id="id_user"
                            placeholder="Masukan Id Alamat"
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

export default EditStore;