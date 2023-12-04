import React from 'react';
import styles from "./TableToko.module.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableToko() {
    return(
        <div className={`p-5 ${styles['container']}`}>
            <div className={`p-4 ${styles['card']}`}>
                <h2 className={`${styles['title']}`}>Daftar Toko</h2>
                <table className={`table caption-top ${styles['table__container']}`}>
                    <thead>
                        <tr>
                            <th scope="col">Kode_toko</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Email</th>
                            <th scope="col">Id_alamat</th>
                            <th scope="col">No_telepon</th>
                            <th scope="col">Profile</th>
                            <th scope="col">Id_user</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bandakala Rental</td>
                            <td>bandakala@gmail.com</td>
                            <td>1</td>
                            <td>08125456485</td>
                            <td>bandakala.jpg</td>
                            <td>1</td>
                            <td>
                                 <Link to="/dashboard/toko/edit-toko/">
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Green Campus Outdoor</td>
                            <td>greencampus@gmail.com</td>
                            <td>2</td>
                            <td>08923445623</td>
                            <td>green.jpg</td>
                            <td>2</td>
                            <td>
                                 <Link to="/dashboard/toko/edit-toko/">
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Cirrus Outdoor</td>
                            <td>cirrusoutdoor@gmail.com</td>
                            <td>3</td>
                            <td>081324565375</td>
                            <td>cirrus.jpg</td>
                            <td>5</td>
                            <td>
                                <Link to="/dashboard/toko/edit-toko/">
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/dashboard/toko/tambah-toko/">
                    <Button variant="primary" className="mb-2 mt-2" >Tambah</Button>
                </Link>
            </div>
        </div>
    );
}

export default TableToko;