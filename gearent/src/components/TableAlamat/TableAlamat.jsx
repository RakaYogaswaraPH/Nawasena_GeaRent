import React from 'react';
import styles from "./TableAlamat.module.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableAlamat() {
    return(
        <div className={`p-5 ${styles['container']}`}>
            <div className={`p-4 ${styles['card']}`}>
                <h2 className={`${styles['title']}`}>Daftar Alamat</h2>
                <table className={`table caption-top ${styles['table__container']}`}>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Jalan</th>
                            <th scope="col">Kota</th>
                            <th scope="col">Provinsi</th>
                            <th scope="col">Kode_pos</th>
                            <th scope="col">Negara</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jln. Raya Kemang Baru Setu</td>
                            <td>Bogor</td>
                            <td>Jawa Barat</td>
                            <td>13453</td>
                            <td>Indonesia</td>
                            <td>
                                <Link to="/dashboard/alamat/edit-alamat/" >
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jln. Jend. Sudirman No.25</td>
                            <td>Bogor</td>
                            <td>Jawa Barat</td>
                            <td>16234</td>
                            <td>Indonesia</td>
                            <td>
                                <Link to="/dashboard/alamat/edit-alamat/" >
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jln. Babakan Lio No.29</td>
                            <td>Bogor</td>
                            <td>Jawa Barat</td>
                            <td>16242</td>
                            <td>Indonesia</td>
                            <td>
                                <Link to="/dashboard/alamat/edit-alamat/" >
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/dashboard/alamat/tambah-alamat/">
                    <Button variant="primary" className="mb-2 mt-2" >Tambah</Button>
                </Link>
            </div>
        </div>
    );
}

export default TableAlamat;