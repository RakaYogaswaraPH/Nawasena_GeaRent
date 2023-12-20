import React, { useEffect, useState } from 'react';
import styles from "./TableAlamat.module.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableAlamat() {

    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:9987/api/admin/alamat')
        .then(res => res.json())
        .then(data => setData(data.data))
        .catch(err => console.log(err))
    }, [])

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
                        {data.map((data, i)=>(
                            <tr key={i}>
                                <td>{data.id}</td>
                                <td>{data.jalan}</td>
                                <td>{data.kota}</td>
                                <td>{data.provinsi}</td>
                                <td>{data.kode_pos}</td>
                                <td>{data.negara}</td>
                                <td>
                                    <Link to="/dashboard/alamat/edit-alamat/" >
                                        <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                    </Link>
                                    <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                                </td>
                            </tr>
                        ))}
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