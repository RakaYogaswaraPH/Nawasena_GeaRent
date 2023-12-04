import React from 'react';
import styles from "./TableGambar.module.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableGambar() {
    return(
        <div className={`p-5 ${styles['container']}`}>
            <div className={`p-4 ${styles['card']}`}>
                <h2 className={`${styles['title']}`}>Daftar Gambar</h2>
                <table className={`table caption-top ${styles['table__container']}`}>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Gambar</th>
                            <th scope="col">Kode_barang_id</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td scope='row'>barang-1.jpg</td>
                            <td>6</td>
                            <td>
                                <Link to="/dashboard/gambar/edit-gambar/">
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td scope='row'>barang-2.jpg</td>
                            <td>4</td>
                            <td>
                                <Link to="/dashboard/gambar/edit-gambar/">
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td scope='row'>barang-3.jpg</td>
                            <td>2</td>
                            <td>
                                <Link to="/dashboard/gambar/edit-gambar/">
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/dashboard/gambar/tambah-gambar/">
                    <Button variant="primary" className="mb-2 mt-2" >Tambah</Button>
                </Link>
            </div>
        </div>
    );
}

export default TableGambar