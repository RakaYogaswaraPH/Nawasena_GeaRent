import React from 'react';
import styles from "./TableBarang.module.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableBarang() {
    return(
        <div className={`p-5 ${styles['container']}`}>
            <div className={`p-4 ${styles['card']}`}>
                <h2 className={`${styles['title']}`}>Daftar Barang</h2>
                <table className={`table caption-top ${styles['table__container']}`}>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Stok</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Tenda</td>
                            <td>Mark</td>
                            <td>20000</td>
                            <td>5</td>
                            <td>
                                <Link to="/dashboard/barang/edit-barang/">
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Matras</td>
                            <td>Mark</td>
                            <td>10000</td>
                            <td>5</td>
                            <td>
                                <Link to="/dashboard/barang/edit-barang/">
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Tas</td>
                            <td>Mark</td>
                            <td>20000</td>
                            <td>5</td>
                            <td>
                                <Link to="/dashboard/barang/edit-barang/">
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Sepatu</td>
                            <td>Mark</td>
                            <td>15000</td>
                            <td>5</td>
                            <td>
                                <Link to="/dashboard/barang/edit-barang/">
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/dashboard/barang/tambah-barang/">
                    <Button variant="primary" className="mb-2 mt-2" >Tambah</Button>
                </Link>
            </div>
        </div>
    );
}

export default TableBarang;