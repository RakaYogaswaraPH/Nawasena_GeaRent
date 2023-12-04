import styles from "./TambahAlamat.module.css";
import {Form, Button } from 'react-bootstrap';

function TambahAlamat() {
    return(
        <div className={`p-5 ${styles['container']}`}>
            <div className={`p-4 ${styles['card']}`}>
                <Form
                action="#"
                method="POST"
                role="form"
                className={styles.form}
                >
                    <h2 className={`${styles['title']}`}>Tambah Alamat</h2>
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
                        <label htmlFor="jalan" className={`mb-2 ${styles['label']}`}>Jalan</label>
                        <Form.Control
                            className={styles.input}
                            type="text"
                            name="jalan"
                            id="jalan"
                            placeholder="Masukan Nama Jalan"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="kota" className={`mb-2 ${styles['label']}`}>Kota</label>
                        <Form.Control
                            className={styles.input}
                            type="text"
                            name="kota"
                            id="kota"
                            placeholder="Masukan Nama Kota"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="provinsi" className={`mb-2 ${styles['label']}`}>Provinsi</label>
                        <Form.Control
                            className={styles.input}
                            type="text"
                            name="provinsi"
                            id="provinsi"
                            placeholder="Masukan Nama Provinsi"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="kodepos" className={`mb-2 ${styles['label']}`}>Kode_pos</label>
                        <Form.Control
                            className={styles.input}
                            type="number"
                            name="kodepos"
                            id="kodepos"
                            placeholder="Masukan Kodepos"
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mt-2 ${styles['form__group']}`}>
                        <label htmlFor="negara" className={`mb-2 ${styles['label']}`}>Negara</label>
                        <Form.Control
                            className={styles.input}
                            type="text"
                            name="negara"
                            id="negara"
                            placeholder="Masukan Nama Provinsi"
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

export default TambahAlamat;