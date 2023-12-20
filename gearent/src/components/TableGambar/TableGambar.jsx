import React, { useEffect, useState } from 'react';
import styles from "./TableGambar.module.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableGambar() {

    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:9987/api/admin/gambar')
        .then(res => res.json())
        .then(data => setData(data.data))
        .catch(err => console.log(err))
    }, [])

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
                        {data.map((data, i)=>(
                            <tr key={i}>
                                <td>{data.id}</td>
                                <td>{data.gambar}</td>
                                <td>{data.kode_barang_id}</td>
                                <td>
                                    <Link to="/dashboard/gambar/edit-gambar/">
                                        <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                    </Link>
                                    <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                                </td>
                            </tr>
                        ))}
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