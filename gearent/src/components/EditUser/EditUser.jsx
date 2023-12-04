import React from 'react';
import styles from "./EditUser.module.css";
import {Form, Button } from 'react-bootstrap';

function EditUser() {
    return(
        <div className={`p-5 ${styles['container']}`}>
            <div className={`p-4 ${styles['card']}`}>
                <Form
                action="#"
                method="POST"
                role="form"
                className={styles.form}
                >
                    <h2 className={`${styles['title']}`}>Edit User</h2>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="username" className={`mb-2 ${styles['label']}`}>Username</label>
                            <Form.Control
                                className={styles.input}
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Masukan Username"
                                required
                            />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="password" className={`mb-2 ${styles['label']}`}>Password</label>
                        <Form.Control
                            className={styles.input}
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Masukan Password"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="status_toko" className={`mb-2 ${styles['label']}`}>Status_toko</label>
                        <Form.Control
                            className={styles.input}
                            type="number"
                            name="status_toko"
                            id="status_toko"
                            placeholder="Masukan Status Toko"
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
                        <label htmlFor="created_at" className={`mb-2 ${styles['label']}`}>Created_at</label>
                        <Form.Control
                            className={styles.input}
                            type="date"
                            name="created_at"
                            id="created_at"
                            placeholder="Masukan Id Alamat"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="updated_at" className={`mb-2 ${styles['label']}`}>Updated_at</label>
                        <Form.Control
                            className={styles.input}
                            type="date"
                            name="updated_at"
                            id="updated_at"
                            placeholder="Masukan Nomor Telepon"
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

export default EditUser;