import React, { useEffect, useState } from 'react';
import styles from "./TableUser.module.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableUser() {
    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:9987/api/admin/users')
        .then(res => res.json())
        .then(data => setData(data.data))
        .catch(err => console.log(err))
    }, [])
    
    return(
        <div className={`p-5 ${styles['container']}`}>
            <div className={`p-4 ${styles['card']}`}>
                <h2 className={`${styles['title']}`}>Daftar Users</h2>
                <table className={`table caption-top ${styles['table__container']}`}>
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Name</th>
                            <th scope="col">Token</th>
                            <th scope="col">Status Toko</th>
                            <th scope="col">Profile</th>
                            <th scope="col">Created_at</th>
                            <th scope="col">Updated_at</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data, i) => (
                            <tr key={i}>
                                <td>{data.username}</td>
                                <td>{data.password}</td>
                                <td>{data.name}</td>
                                <td>{data.token}</td>
                                <td>{data.status_toko}</td>
                                <td>{data.profile}</td>
                                <td>{data.created_at}</td>
                                <td>{data.updated_at}</td>
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
            </div>
        </div>
    );
}

export default TableUser;