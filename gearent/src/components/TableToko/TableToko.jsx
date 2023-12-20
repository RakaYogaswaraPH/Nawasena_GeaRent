import React, { useEffect, useState } from 'react';
import styles from "./TableToko.module.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableToko() {

    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:9987/api/admin/tokos')
        .then(res => res.json())
        .then(data => setData(data.data))
        .catch(err => console.log(err))
    }, [])

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
                            <th scope="col">Profile Toko</th>
                            <th scope="col">Username user</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data, i)=>(
                            <tr key={i}>
                                <td>{data.kode_toko}</td>
                                <td>{data.nama}</td>
                                <td>{data.email}</td>
                                <td>{data.id_alamat}</td>
                                <td>{data.no_telepon}</td>
                                <td>{data.profile_toko}</td>
                                <td>{data.username_user}</td>
                                <td>
                                    <Link to="/dashboard/toko/edit-toko/">
                                        <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                    </Link>
                                    <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                                </td>
                            </tr>
                        ))}
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