import React, { useEffect, useState } from 'react';
import styles from "./TableBarang.module.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableBarang() {
    
    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:9987/api/admin/barang')
        .then(res => res.json())
        .then(data => setData(data.data))
        .catch(err => console.log(err))
    }, [])
    
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
                            <th scope="col">Toko_id</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data, i)=>(
                            <tr key={i}>
                                <td>{data.id}</td>
                                <td>{data.nama}</td>
                                <td>{data.deskripsi}</td>
                                <td>{data.harga}</td>
                                <td>{data.stok}</td>
                                <td>{data.toko_id}</td>
                                <td>
                                    <Link to="/dashboard/barang/edit-barang/">
                                        <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                    </Link>
                                    <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                                </td>
                            </tr>
                        ))}
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